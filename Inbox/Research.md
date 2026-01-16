# Market Oracle Technical Execution Roadmap: Integrating Agentic Commerce Protocols (UCP, ACP, MCP) and Google Merchant API Migration (Jan–Aug 2026)

## Executive Summary

The year 2026 represents a watershed moment in the architecture of digital commerce, defined by the transition from direct-to-consumer (DTC) interfaces to agent-to-consumer (A2C) interactions. The "Market Oracle" is conceived as the critical intelligence layer designed to facilitate this shift, serving as the central nervous system that translates static, siloed product data into dynamic, agent-ready knowledge graphs. This report outlines an exhaustive technical execution roadmap for the Market Oracle, spanning the critical development window from the January 2026 launch of the Universal Commerce Protocol (UCP) and Agentic Commerce Protocol (ACP) to the immutable sunset of the Google Content API for Shopping on August 18, 2026.1

Our analysis indicates that the simultaneous maturation of these protocols necessitates a bifurcated yet integrated architecture. The Market Oracle must function not merely as a passive data repository but as an active "Protocol Translation Layer," capable of ingesting high-velocity data via the new Google Merchant API and exposing it simultaneously through UCP-compliant capability definitions and ACP-compliant secure payment flows. Furthermore, the roadmap prioritizes the deployment of the "Confidence Infrastructure"—a proprietary validation framework leveraging OAuth 2.1, C2PA provenance standards, and Schema.org explainability extensions—to ensure that autonomous AI agents operate with high fidelity, trust, and verifiable supply chain provenance.

The primary technical risk identified is the friction between the deprecation of legacy Google Content API endpoints and the rigorous latency and security requirements of agentic authorization. The migration to the Google Merchant API is not a simple version upgrade; it is a fundamental architectural paradigm shift from file-based feeds to modular "Data Sources" and asynchronous, push-based notifications.2 Failure to complete this migration by the August deadline will result in a catastrophic loss of inventory visibility for AI agents, rendering the Market Oracle largely inert. Consequently, this roadmap treats the API migration as the foundational critical path upon which all agentic capabilities are built.

## 1. The Agentic Commerce Paradigm Shift: Strategic Context

The inception of the Market Oracle is driven by the fragmentation of the emerging agentic commerce ecosystem. As of early 2026, the digital commerce landscape has bifurcated into distinct protocol standards, creating a complex integration environment that merchants must navigate to remain relevant.

### 1.1 The "Bipolar" Protocol Landscape: UCP vs. ACP

The divergence between the Universal Commerce Protocol (UCP) and the Agentic Commerce Protocol (ACP) dictates the core architectural requirements for the Market Oracle. These protocols address the same fundamental problem—enabling AI agents to transact—but approach it from radically different architectural philosophies.

Universal Commerce Protocol (UCP):

Co-developed by Shopify and Google, UCP is designed as a comprehensive open standard covering the entire shopping journey, from discovery and cart management to post-purchase support and returns.4 Its integration into Google’s "AI Mode" and Gemini surfaces allows for "Native Checkout," where the transaction logic is embedded directly within the inference layer of the AI model, rather than redirecting the user to a webview.6 UCP utilizes a composable architecture of "Capabilities" (e.g., Cart, Identity, Order) and leverages the Model Context Protocol (MCP) as a transport layer bindings.6

Agentic Commerce Protocol (ACP):

Spearheaded by OpenAI and Stripe, ACP focuses narrowly and intensively on the transactional handoff. Its core primitive is the "Shared Payment Token" (SPT), which facilitates the secure exchange of payment credentials between a buyer, an AI agent, and a merchant without ever exposing sensitive credit card data to the Large Language Model (LLM) context window.7 ACP is designed for high-velocity, programmatic commerce flows, such as "Instant Checkout" in ChatGPT, where the agent orchestrates the purchase intent but offloads the financial security to a trusted third party.9

Implications for Market Oracle:

The Market Oracle cannot simply utilize a single output standard. It must act as a Protocol Translation Layer. It is required to ingest product data via the new Google Merchant API and expose it simultaneously as UCP-compliant "Capabilities" for Google ecosystems and ACP-compliant "Checkout Configurations" for OpenAI ecosystems. This duality requires a unified internal data model that maps standardized retail primitives (SKU, Price, Inventory, Shipping) to the distinct schema requirements of both protocols.

### 1.2 The Legacy Migration Imperative

Simultaneously, the underlying infrastructure for product data ingestion—the "system of record" for most merchants—is collapsing. The Google Content API for Shopping, the industry standard for over a decade, has a hard sunset date of August 18, 2026.1 The replacement, the Google Merchant API, introduces fundamentally different concepts—specifically the shift from "Feeds" to "Data Sources" and the introduction of gRPC support for high-throughput environments.2

For the Market Oracle, this migration is the critical path. An agentic intelligence layer fed by deprecated or latency-prone APIs will fail to provide the real-time inventory assurances required by autonomous agents. If an AI agent attempts to purchase an item that is out of stock due to API latency or sync failures, consumer trust in the agentic paradigm evaporates. Therefore, the migration to the Merchant API is not just a compliance task; it is a performance prerequisite for the Confidence Infrastructure.

## 2. The Ingestion Layer: Google Merchant API Migration Strategy

The migration from the Content API to the Merchant API is the foundational step of this roadmap. The "Content API" will be fully deprecated by August 2026, meaning the Market Oracle must be fully operational on the new infrastructure well before this deadline to avoid service disruption during the peak Q4 preparation period. The transition represents a move from a monolithic, file-based mental model to a modular, resource-oriented architecture.

### 2.1 Technical Gap Analysis: Content API vs. Merchant API

The provided project notes and research highlight significant architectural differences that require immediate engineering attention. The "shim" strategy often used in API migrations will likely be insufficient due to the depth of the structural changes.

#### 2.1.1 From "Feeds" to "Data Sources"

The Content API utilized a file-based or stream-based "Feed" concept, where merchants would upload large XML or JSON blobs. The Merchant API replaces this with "Data Sources".3 This is not merely a naming change; it alters the update logic and the lifecycle management of product data.

- Gap: The legacy system likely relies on customBatch calls to update disparate products in a single HTTP request. The Merchant API deprecates customBatch in favor of built-in batching capabilities and specific sub-API methods. For example, products.insert is now optimized for asynchronous processing, and the API introduces specialized methods for partial updates.2
    
- Implication: The Market Oracle's ingestion engine must be rewritten to utilize the DataSources service for managing primary and supplemental feeds. We must transition from monolithic feed uploads to granular, partial updates using the ProductsUpdate method. This method allows modifying individual fields (e.g., price, inventory) without re-submitting the entire product object, which is critical for the high-frequency updates required by agentic commerce.2
    

#### 2.1.2 Identification Logic Changes

The Merchant API introduces a strict change in resource identification strings. This is a breaking change for any database that uses the Google ID as a primary or foreign key.

- Legacy ID Format: channel:contentLanguage:feedLabel:offerId (e.g., online:en:US:sku123).
    
- New ID Format: contentLanguage~feedLabel~offerId (e.g., en~US~sku123).2
    
- Gap: The "Channel" component (online/local) is removed from the ID string and is instead handled via the context of the API call or specific account settings. Any database foreign keys or mapping tables within the Market Oracle that rely on the old ID string format will break immediately upon switchover.
    
- Solution: A schema migration script must be executed in Phase 1 (Jan-Feb) to normalize all product IDs in the Market Oracle database to the new tilde-separated format. This migration must happen before the dual-write phase to ensure data consistency.
    

#### 2.1.3 Throughput and Latency Optimization

The Merchant API dramatically increases the maximum pageSize from 250 to 1,000 rows per call.2 This change directly addresses the scalability concerns of large catalogs but requires refactoring the pagination logic in the ingestion workers.

- Opportunity: This allows the Market Oracle to sync large catalogs approximately 4x faster, reducing the "time to agent awareness."
    
- Implementation: The ingestion workers should be reconfigured to batch updates in chunks of 1,000. Furthermore, the roadmap mandates the adoption of the gRPC interface for the Merchant API rather than REST. gRPC uses Protocol Buffers (protobufs), which offer significantly lower latency and serialization overhead—critical for real-time inventory checks by AI agents.11 REST should be reserved only for debugging or low-volume endpoints.
    

### 2.2 Advanced Feature Adoption: Notifications and Reviews

The move to the Merchant API unlocks new capabilities that are essential for the "Confidence" score calculation.

- Notifications Sub-API: Unlike the polling model of the Content API, the Merchant API supports a push-based notification system via Google Pub/Sub.3
    

- Application: The Market Oracle can subscribe to product.status_change events. If a product is disapproved for policy violations, the Oracle receives an instant signal and can immediately downgrade the "Confidence Score" of that product to zero, preventing agents from recommending it. This responsiveness is impossible with a daily polling model.
    

- Reviews and Promotions: The new API treats Reviews and Promotions as first-class resources managed via DataSources.3 Integrating these allows the Market Oracle to feed sentiment data and active discount codes directly to agents, enhancing the "reasoning" capabilities of the purchasing agent.
    

## 3. The Interaction Layer: Protocol Integration and Interoperability

The core value proposition of the Market Oracle is its ability to "speak" the native languages of the new commerce internet. This section details the integration of the three critical protocols: MCP, UCP, and ACP.

### 3.1 Model Context Protocol (MCP) Integration

The Model Context Protocol (MCP) acts as the standardized "connective tissue" between the Large Language Model (the "Host") and the Market Oracle (the "Server").12 By implementing MCP, we avoid the "N x M" integration problem, where we would otherwise need custom plugins for Claude, ChatGPT, Gemini, etc..13

#### 3.1.1 MCP Server Architecture

The Market Oracle will act as an MCP Server. This server will expose "Resources" (static data like product descriptions) and "Tools" (executable actions like checking inventory, calculating shipping, or placing a hold).12

- Transport Layer: We will implement JSON-RPC 2.0 over Server-Sent Events (SSE). While stdio is faster for local tools, SSE is preferred for remote resources because the Market Oracle is a cloud-hosted intelligence layer accessed by disparate agents.12
    
- Prompt Integration: The MCP server will include pre-defined "Prompts" (templates) that help agents query the data effectively. For example, a search_products prompt can be exposed that automatically formats the agent's natural language query into a structured filter compatible with the Market Oracle database.14 This reduces the token overhead for the agent, as it doesn't need to "learn" the query schema from scratch.
    

#### 3.1.2 Efficient Context Management

A critical gap identified in the research is the "Context Window Overload" problem.13 Loading thousands of tool definitions (SKUs, variants) into the LLM's context window is slow and expensive.

- Solution: The Market Oracle will implement "Progressive Disclosure" or "Sampling" via MCP. Instead of sending the full catalog, the MCP server will provide a high-level summary resource. When the agent queries a specific category, the server will dynamically provide the relevant "Tools" or "Resources" for that specific context (e.g., only loading the configure_laptop tool when the user is looking at computers).13
    

### 3.2 Universal Commerce Protocol (UCP) Integration

UCP is the primary vehicle for Google ecosystem integration (Search Generative Experience / Gemini). It requires a strict adherence to its "Capability" model.

#### 3.2.1 Native Checkout Implementation

The Market Oracle must expose a UCP-compliant REST API to enable "Native Checkout." This allows Google's AI to process the transaction without redirecting the user to a website.6

- Endpoint Requirements:
    

- POST /checkout-sessions: Initializes a cart session. The payload must accept line items, quantities, and optional user context.
    
- GET /checkout-sessions/{id}: Retrieves the current state of the cart, including taxes and shipping estimates.
    
- PUT /checkout-sessions/{id}: Updates the cart with new shipping addresses or billing details provided by the user via the Google interface.
    
- POST /checkout-sessions/{id}/complete: Finalizes the order. This endpoint receives the payment token and risk signals.6
    

- Data Mapping: The Market Oracle must map internal product data to the UCP schema. Crucially, UCP allows for "Extensions." We will define a confidence_score extension in the UCP payload, allowing the Google Agent to see the proprietary confidence metric generated by our infrastructure. This score acts as a "reasoning signal" for the AI.6
    

#### 3.2.2 Embedded Checkout Fallback

For scenarios where Native Checkout is not supported (e.g., complex regulated goods requiring age verification not handled by the agent), the Market Oracle must support the UCP "Embedded Checkout" mode.

- Mechanism: This utilizes an Iframe communication protocol via JSON-RPC.
    
- Development Task: Build a simplified, headless checkout frontend that can be loaded within an iframe. This frontend must be capable of emitting postMessage events that the UCP host (the AI agent) can listen to (e.g., ec.line_items.change, ec.buyer.change).6 This hybrid approach allows the agent to maintain context while the merchant controls the UI compliance.
    

### 3.3 Agentic Commerce Protocol (ACP) Integration

ACP is required for the OpenAI ecosystem (ChatGPT) and focuses on the secure handoff of payment credentials.

#### 3.3.1 Shared Payment Tokens (SPT)

The integration focus here is strictly on payment security.

- Workflow:
    

1. The User agrees to purchase in ChatGPT.
    
2. OpenAI (the Platform) requests a Shared Payment Token (SPT) from the Payment Service Provider (Stripe). This token encapsulates the user's payment method but is scoped specifically to the Merchant (Market Oracle's client) and the specific transaction amount.8
    
3. The Agent sends this SPT to the Market Oracle via the ACP API.
    
4. The Market Oracle uses the SPT to charge the user via the payment processor (Stripe) without ever handling raw card data.
    

- Gap Analysis: The current project notes do not mention a Payment Service Provider (PSP) strategy. To support ACP, the Market Oracle must integrate with a PSP that supports the ACP standard (initially Stripe). This requires setting up Stripe Connect or a similar multiparty payment architecture.
    

### 3.4 Fallback Strategy: Zinc API Integration

In cases where a retailer does not support UCP or ACP, or where the Market Oracle acts as a third-party aggregator, we must implement a fallback using the Zinc API.15 Zinc provides a programmatic layer over traditional e-commerce sites (Amazon, Walmart), effectively "agentifying" non-agentic sites.

- Role: Zinc acts as a "Headless Browser as a Service," allowing the Market Oracle to place orders on behalf of an agent even if the merchant has no API.
    
- Integration: We will use Zinc's order endpoint to execute purchases that fail the UCP/ACP handshake. This serves as a critical redundancy layer, ensuring that the "Market Oracle" can fulfill requests even for legacy merchants.17
    

## 4. The Intelligence Layer: "Confidence Infrastructure"

The "Confidence Infrastructure" is the Market Oracle's primary differentiator. It ensures that data fed to agents is not only technically accessible (via MCP/UCP) but explicitly trusted and explainable.

### 4.1 Explainability: Schema.org and GS1 Extensions

To prevent agent hallucinations, we must provide "Explainability" data. Standard Schema.org Product types are insufficient for complex agentic reasoning (e.g., "Why is this incompatible with my device?" or "Is this recyclable?").

#### 4.1.1 Implementation of Pending Extensions

We will utilize the Pending area of Schema.org and the GS1 Web Vocabulary to enhance product data.18

- GS1 Extensions: We will implement the gs1: namespace properties.
    

- gs1:consumerHandlingStorage: Explicit instructions for the agent on how the product must be handled (e.g., "Keep Frozen"). This prevents the agent from recommending a frozen item for a user who explicitly stated they have a long commute home.20
    
- gs1:consumerUsageInstructions: Semantic usage guides that the LLM can ingest to answer user questions like "How do I install this?" directly from the metadata.20
    
- gs1:packagingMarkedLabelAccreditation: Using this property allows the agent to filter products based on verified attributes (e.g., gs1:Organic) rather than parsing marketing text, which is prone to "greenwashing".20
    

#### 4.1.2 JSON-LD Structure for Agents: llms.txt

The Market Oracle will inject a llms.txt file at the root of the merchant's domain.21 This file acts as a curated index for AI crawlers, pointing them to specific Markdown or JSON-LD representations of the product catalog.

- Gap: Standard robots.txt blocks crawlers or treats them generically. llms.txt explicitly invites them and provides a map.
    
- Action: Generate dynamic llms.txt files that prioritize high-confidence, high-stock products. We will also generate llms-full.txt files that compile key documentation and product specs into a single, token-optimized Markdown file, allowing the agent to ingest the entire context in one retrieval step.22
    

### 4.2 Provenance & Authenticity: C2PA Standards

To validate the "Real-world technical specifications" requested, we look to the Coalition for Content Provenance and Authenticity (C2PA) to solve the problem of "Injection Attacks" where malicious agents or sites falsify product listings.

#### 4.2.1 Content Credentials Manifest

The Market Oracle will apply C2PA manifests to product imagery and descriptions.24

- Hard Binding: We will generate a cryptographic hash of the product image using the JUMBF format.
    
- Assertions: We will sign a C2PA manifest containing specific assertions:
    

- c2pa.actions.v2: Marked as "Created" by the brand's verified identity.
    
- stds.schema-org.CreativeWork: Embedding the Schema.org metadata inside the image manifest. This ensures that even if the text description is separated from the image, the image itself carries the product data.26
    
- digitalSourceType: Defined as "[http://cv.iptc.org/newscodes/digitalsourcetype/digitalCapture](http://cv.iptc.org/newscodes/digitalsourcetype/digitalCapture)" to prove it is a real photo, not a Generative AI hallucination.25
    

- Verification: When an agent requests a product image via MCP, the Market Oracle serves the image with the embedded manifest. The agent can verify the digital signature against the brand's public key (stored in a verified Trust List). This mathematically proves that the image has not been altered since it left the Merchant's control.
    

#### 4.2.2 Soft Binding for Recovery

We will implement "Soft Bindings" (e.g., invisible watermarking) as a fallback. If the metadata is stripped by a social platform or aggregator, the Market Oracle can use the watermark to look up the original manifest in a decentralized repository, restoring the chain of trust.27

### 4.3 Supply Chain Verification: ImportYeti Integration

To further bolster the "Confidence Score," the Market Oracle will integrate external supply chain signals.

- Data Source: We will utilize ImportYeti data 28 to verify supplier claims.
    
- Validation Logic: If a product claims to be "Made in Italy," the Market Oracle will query ImportYeti (via their beta API or structured data scraping if compliant) to verify that the bill of lading (BoL) records show shipments from Italian ports to the merchant's warehouse.28
    
- Scoring: A match increases the Confidence Score; a mismatch (e.g., claiming Italy but shipping solely from a different region) flags the product as "Low Confidence" for the agent.
    

## 5. Security & Authorization Architecture

The project notes request verification of OAuth 2.1 feasibility for the "Confidence Infrastructure." Security in an agentic world is fundamentally different because the "user" is a machine.

### 5.1 OAuth 2.1 and PKCE

MCP mandates the use of OAuth 2.1 for authorization. This profile solidifies security by removing insecure legacy flows.30

- Mandatory PKCE: The "Proof Key for Code Exchange" (PKCE) is mandatory for all clients in OAuth 2.1. This prevents authorization code interception attacks.
    
- Implementation Detail:
    

1. When the Agent (MCP Client) initiates a connection, it generates a code_verifier (random string) and a code_challenge (SHA256 hash).
    
2. The code_challenge is sent in the initial authorization request.
    
3. Upon exchanging the authorization code for a token, the Agent must send the original code_verifier.
    
4. The Authorization Server verifies the hash matches. This binds the authorization code to the specific agent instance that requested it.
    

### 5.2 Dynamic Client Registration (DCR)

A major challenge in M2M (Machine-to-Machine) commerce is that agents are ephemeral. We cannot manually register every agent instance in the Market Oracle dashboard.

- Solution: We will implement Dynamic Client Registration (DCR).32
    
- Workflow:
    

1. An Agent requests registration at the /register endpoint.
    
2. The request includes an "Infrastructure Attestation"—a signed document from the cloud provider (e.g., AWS Nitro Enclave or Google Confidential Space) proving the agent is running verified code.30
    
3. The Market Oracle validates the attestation and programmatically issues a Client ID and Client Secret to the agent.
    
4. The agent uses these credentials to initiate the OAuth 2.1 flow.
    

- Benefit: This creates a "Zero Trust" environment where the Market Oracle trusts the infrastructure rather than the ephemeral agent software.
    

## 6. Execution Roadmap (Jan – Aug 2026)

This roadmap assumes a parallel track execution: Track A focuses on the Google API Migration (Infrastructure), and Track B focuses on Protocol Integration (Innovation).

### Phase 1: Foundation & Specifications (January – February 2026)

Objective: Establish the architecture and initiate the API migration shim.

- Week 1-4 (Track A - Migration):
    

- Audit: Comprehensive scan of all Content API usage. Map every endpoint to its Merchant API equivalent using the "shim" pattern.
    
- Shim Development: Build a translation layer that accepts legacy internal payloads and converts them to DataSources updates for the Merchant API.
    
- ID Migration Scripting: Develop and test the database migration scripts to convert colon-separated IDs to tilde-separated IDs (~).2
    

- Week 1-4 (Track B - Protocols):
    

- MCP Server Scaffolding: Set up the basic MCP host using the Python SDK.14 Implement the "Transport Layer" using SSE.
    
- OAuth 2.1 Config: Configure the Authorization Server (e.g., Keycloak) to enforce PKCE and disable implicit flows.
    
- C2PA Prototype: Setup c2patool in the dev environment and generate the first valid manifest for a test image.33
    

Milestone (Feb 28, 2026): Merchant API v1beta is deprecated. Ensure Shim is targeting Merchant API v1.34

### Phase 2: Implementation & Hybrid Operation (March – May 2026)

Objective: Activate UCP/ACP endpoints and run "Dual Write" for Google feeds.

- Month 3 (March):
    

- Dual Write: Enable the ingestion engine to write to both Content API (Legacy) and Merchant API (New). Compare results for data fidelity.
    
- UCP Native Checkout: Develop the POST /checkout-sessions endpoint. Map internal cart logic to UCP schema. Implement the confidence_score extension in the response payload.
    

- Month 4 (April):
    

- ACP Integration: Integrate Stripe's agentic endpoints. Implement the logic to accept and validate Shared Payment Tokens.
    
- Confidence Logic: Connect the ImportYeti API/Scraper to the validation engine. Begin scoring suppliers based on BoL data.
    
- C2PA Signing: Deploy the C2PA signing service to the staging environment.
    

- Month 5 (May):
    

- Data Source Switchover: Formally promote the Merchant API to the "System of Record." Stop writing to Content API, but keep reading for verification.
    
- llms.txt Deployment: Deploy the dynamic llms.txt and llms-full.txt generation service to the edge CDN.
    

### Phase 3: Switchover & Optimization (June – August 2026)

Objective: Full agentic operation and legacy sunset.

- Month 6 (June):
    

- MCP Production Deploy: Roll out the MCP server to production. Allow external agents (with authorized Client IDs) to connect via OAuth 2.1.
    
- UCP Certification: Submit the UCP integration to Google for validation (required for AI Mode inclusion).6
    
- Zinc Fallback: Activate the Zinc API integration for non-compliant merchants as a failsafe.
    

- Month 7 (July):
    

- Legacy Cleanup: Delete all Content API code paths and dependencies.
    
- LLM Optimization: Refine llms.txt and Schema.org extensions based on agent crawl logs (if accessible) to improve "explainability."
    

- Month 8 (August):
    

- Final Cutover: August 18, 2026 deadline. Content API is effectively dead.1 The Market Oracle is now the sole source of truth, powered exclusively by the Merchant API.
    

## 7. Risk Assessment & Mitigation

  

|   |   |   |   |
|---|---|---|---|
|Risk|Probability|Impact|Mitigation Strategy|
|Merchant API Rate Limits|Medium|High|The new API has higher limits (1000 page size), but push notifications can cause thundering herds. Implement exponential backoff and use the quota sub-API to monitor usage dynamically.3|
|Agent Hallucination|High|Severe|Confidence Infrastructure: The agent must request a fresh price check via MCP tool call (get_realtime_price) before finalizing any ACP/UCP checkout. Do not rely on cached context.|
|ACP/UCP Conflict|Medium|Medium|Maintain a strictly agnostic internal data model. Use "Adapters" at the edge to serialize this data into UCP or ACP formats, preventing protocol lock-in.|
|Latency in C2PA Signing|Low|Low|Asset signing happens asynchronously upon upload, not at request time. The manifest is statically served, ensuring zero latency impact on the agent.|

## 8. Conclusion

The "Market Oracle" is not merely a technical upgrade; it is a strategic repositioning of commerce infrastructure for the AI era. By strictly adhering to this roadmap, the development team will not only navigate the mandatory Google Merchant API migration but will simultaneously establish a "Confidence Infrastructure" that makes their merchant data the most trusted, explainable, and accessible dataset for the next generation of autonomous AI agents. The convergence of UCP’s journey management, ACP’s payment security, and MCP’s connectivity provides the robust triad required to succeed in the agentic economy of 2026. The shift to a "Push-based" architecture via the Merchant API, combined with the "Pull-based" verification of C2PA and ImportYeti, creates a closed-loop system of trust that human buyers—and their agent delegates—will demand.

#### Источники

1. Shopify - Google Feed Migration: Why Your Feed Rules Might Vanish Overnight - 4M Digital, дата последнего обращения: января 13, 2026, [https://www.4mdigitalconsulting.com/post/shopify-google-feed-migration-why-your-feed-rules-might-vanish-overnight](https://www.4mdigitalconsulting.com/post/shopify-google-feed-migration-why-your-feed-rules-might-vanish-overnight)
    
2. Google launches Merchant API, signals transition from Content API - PPC Land, дата последнего обращения: января 13, 2026, [https://ppc.land/google-launches-merchant-api-signals-transition-from-content-api/](https://ppc.land/google-launches-merchant-api-signals-transition-from-content-api/)
    
3. Announcing the Merchant API Beta, the new version of the Content API for Shopping, дата последнего обращения: января 13, 2026, [http://ads-developers.googleblog.com/2024/07/announcing-merchant-api-beta-new.html](http://ads-developers.googleblog.com/2024/07/announcing-merchant-api-beta-new.html)
    
4. Google CEO Sundar Pichai says AI agents will be a big part of how we shop, Elon Musk responds, дата последнего обращения: января 13, 2026, [https://timesofindia.indiatimes.com/technology/tech-news/google-ceo-sundar-pichai-says-ai-agents-will-be-a-big-part-of-how-we-shop-elon-musk-responds/articleshow/126477679.cms](https://timesofindia.indiatimes.com/technology/tech-news/google-ceo-sundar-pichai-says-ai-agents-will-be-a-big-part-of-how-we-shop-elon-musk-responds/articleshow/126477679.cms)
    
5. The agentic commerce platform: Shopify connects any merchant to every AI conversation, дата последнего обращения: января 13, 2026, [https://www.shopify.com/news/ai-commerce-at-scale](https://www.shopify.com/news/ai-commerce-at-scale)
    
6. Google Universal Commerce Protocol (UCP) Guide | Google for ..., дата последнего обращения: января 13, 2026, [https://developers.google.com/merchant/ucp](https://developers.google.com/merchant/ucp)
    
7. Agentic Commerce Protocol, дата последнего обращения: января 13, 2026, [https://www.agenticcommerce.dev/](https://www.agenticcommerce.dev/)
    
8. Introducing our agentic commerce solutions - Stripe, дата последнего обращения: января 13, 2026, [https://stripe.com/blog/introducing-our-agentic-commerce-solutions](https://stripe.com/blog/introducing-our-agentic-commerce-solutions)
    
9. Developing an open standard for agentic commerce - Stripe, дата последнего обращения: января 13, 2026, [https://stripe.com/blog/developing-an-open-standard-for-agentic-commerce](https://stripe.com/blog/developing-an-open-standard-for-agentic-commerce)
    
10. Google Merchant API Is Replacing The Content API For Shopping, дата последнего обращения: января 13, 2026, [https://www.seroundtable.com/google-merchant-api-content-api-for-shopping-39958.html](https://www.seroundtable.com/google-merchant-api-content-api-for-shopping-39958.html)
    
11. Google Merchant API is officially available - CSS Shopping in EU, дата последнего обращения: января 13, 2026, [https://www.cssshoppingin.eu/google-merchant-api-is-officially-available/](https://www.cssshoppingin.eu/google-merchant-api-is-officially-available/)
    
12. What is Model Context Protocol (MCP)? A guide | Google Cloud, дата последнего обращения: января 13, 2026, [https://cloud.google.com/discover/what-is-model-context-protocol](https://cloud.google.com/discover/what-is-model-context-protocol)
    
13. Code execution with MCP: building more efficient AI agents - Anthropic, дата последнего обращения: января 13, 2026, [https://www.anthropic.com/engineering/code-execution-with-mcp](https://www.anthropic.com/engineering/code-execution-with-mcp)
    
14. Model Context Protocol - GitHub, дата последнего обращения: января 13, 2026, [https://github.com/modelcontextprotocol](https://github.com/modelcontextprotocol)
    
15. Zinc Reviews 2025: Details, Pricing, & Features - G2, дата последнего обращения: января 13, 2026, [https://www.g2.com/products/zinc-zinc/reviews](https://www.g2.com/products/zinc-zinc/reviews)
    
16. Zinc API Reference: Introduction, дата последнего обращения: января 13, 2026, [http://docs.zincapi.com/](http://docs.zincapi.com/)
    
17. ZINC, дата последнего обращения: января 13, 2026, [https://zinc.io/index.html](https://zinc.io/index.html)
    
18. Pending - Schema.org, дата последнего обращения: января 13, 2026, [https://schema.org/docs/pending.home.html](https://schema.org/docs/pending.home.html)
    
19. GS1 Web Vocabulary, дата последнего обращения: января 13, 2026, [https://ref.gs1.org/voc/](https://ref.gs1.org/voc/)
    
20. gs1:Product - GS1 Web Vocabulary, дата последнего обращения: января 13, 2026, [https://ref.gs1.org/voc/Product](https://ref.gs1.org/voc/Product)
    
21. LLMs.txt: The Emerging Standard Reshaping AI-First Content Strategy | ScaleMath, дата последнего обращения: января 13, 2026, [https://scalemath.com/blog/llms-txt/](https://scalemath.com/blog/llms-txt/)
    
22. What is llms.txt? Breaking down the skepticism - Mintlify, дата последнего обращения: января 13, 2026, [https://www.mintlify.com/blog/what-is-llms-txt](https://www.mintlify.com/blog/what-is-llms-txt)
    
23. The role and functionality of llms.txt in LLM-driven web interactions - Profound, дата последнего обращения: января 13, 2026, [https://www.tryprofound.com/resources/articles/what-is-llms-txt-guide](https://www.tryprofound.com/resources/articles/what-is-llms-txt-guide)
    
24. C2PA | Verifying Media Content Sources, дата последнего обращения: января 13, 2026, [https://c2pa.org/](https://c2pa.org/)
    
25. Writing assertions and actions | Open-source tools for content authenticity and provenance, дата последнего обращения: января 13, 2026, [https://opensource.contentauthenticity.org/docs/manifest/writing/assertions-actions](https://opensource.contentauthenticity.org/docs/manifest/writing/assertions-actions)
    
26. Introduction to CAI & C2PA and application to TDM and genAI - W3C, дата последнего обращения: января 13, 2026, [https://www.w3.org/2023/09/pmwg-slides/CAI-C2PA.pdf](https://www.w3.org/2023/09/pmwg-slides/CAI-C2PA.pdf)
    
27. C2PA Soft Binding API, дата последнего обращения: января 13, 2026, [https://spec.c2pa.org/specifications/specifications/2.2/softbinding/Decoupled.html](https://spec.c2pa.org/specifications/specifications/2.2/softbinding/Decoupled.html)
    
28. ImportYeti 2026 Pricing, Features, Reviews & Alternatives - GetApp, дата последнего обращения: января 13, 2026, [https://www.getapp.com/business-intelligence-analytics-software/a/importyeti/](https://www.getapp.com/business-intelligence-analytics-software/a/importyeti/)
    
29. Analysis of ImportYeti, Data.importYeti, Vujis, And JSONCargo | PDF | Bill Of Lading - Scribd, дата последнего обращения: января 13, 2026, [https://www.scribd.com/document/957914368/Analysis-of-ImportYeti-Data-importYeti-Vujis-And-JSONCargo](https://www.scribd.com/document/957914368/Analysis-of-ImportYeti-Data-importYeti-Vujis-And-JSONCargo)
    
30. MCP, OAuth 2.1, PKCE, and the Future of AI Authorization - Aembit, дата последнего обращения: января 13, 2026, [https://aembit.io/blog/mcp-oauth-2-1-pkce-and-the-future-of-ai-authorization/](https://aembit.io/blog/mcp-oauth-2-1-pkce-and-the-future-of-ai-authorization/)
    
31. Technical Deconstruction of MCP Authorization: A Deep Dive into OAuth 2.1 and IETF RFC Specifications | The road - kane.mx, дата последнего обращения: января 13, 2026, [https://kane.mx/posts/2025/mcp-authorization-oauth-rfc-deep-dive/](https://kane.mx/posts/2025/mcp-authorization-oauth-rfc-deep-dive/)
    
32. Diving Into the MCP Authorization Specification - Descope, дата последнего обращения: января 13, 2026, [https://www.descope.com/blog/post/mcp-auth-spec](https://www.descope.com/blog/post/mcp-auth-spec)
    
33. Signing mechanism and sample code - DigiCert developer portal, дата последнего обращения: января 13, 2026, [https://dev.digicert.com/en/document-trust-api/signing-c2pa-images-via-digicert-csc-api-using-rust-ffi/explanation-of-the-signing-mechanism-and-sample-code.html](https://dev.digicert.com/en/document-trust-api/signing-c2pa-images-via-digicert-csc-api-using-rust-ffi/explanation-of-the-signing-mechanism-and-sample-code.html)
    
34. Latest updates | Merchant API - Google for Developers, дата последнего обращения: января 13, 2026, [https://developers.google.com/merchant/api/latest-updates](https://developers.google.com/merchant/api/latest-updates)
    

**