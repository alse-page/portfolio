# 🤖 AI Automation & Low-Code Engineering Portfolio

Welcome to my technical portfolio! This repository contains architectural blueprints and custom scripts for complex business automations I've designed using **n8n** and **Make.com**.

> 📊 **Business Cases & Impact:** For detailed case studies and demonstrations of these workflows in action, please visit my [Notion Portfolio](https://hail-gear-881.notion.site/Aleksandr-Automation-Portfolio-2b90054fae90803c9d23cda7d2f3f8e3).

---

## 🛠️ Custom Code & Scripts
* `hr_data_parser.js` — Custom JavaScript used within the n8n environment for safe JSON parsing, error handling, and formatting AI outputs into Markdown with emojis for Airtable.

---

## 🚀 n8n Workflows (Self-Hosted Architecture)

### 1. Autonomous HR Screening & Voice AI
* **File:** `5. HR+Airtable candidate base+phone call and english level evaluation.json`
* **Stack:** n8n, Vapi (Voice AI), OpenAI (GPT-4o-mini), Airtable, Webhooks, JavaScript.
* **Architecture:** An end-to-end recruitment pipeline. Captures PDF resumes via Webhook, extracts and scores text against a Job Description using LLM, and conditionally triggers an automated API call to Vapi to conduct a voice AI interview.

### 2. AI Agent with Long-Term Memory & RAG
* **File:** `1. AIAgent+telegram bot with memory supabase+RAG-system qdrant.json`
* **Stack:** n8n, Telegram Trigger, OpenAI (GPT-4), Supabase (PostgreSQL), Qdrant.
* **Architecture:** A smart Telegram bot acting as a sales consultant. Features persistent conversational memory via Supabase and semantic search (RAG) through Qdrant vector store to prevent AI hallucinations.

### 3. Vector Database Synchronization Pipeline
* **File:** `2 Google sheets - Qdrant vector store.json`
* **Stack:** n8n, Google Sheets, OpenAI Embeddings, Qdrant REST API.
* **Architecture:** A scheduled cron-job that parses updated rows from inventory spreadsheets, vectorizes product data using `text-embedding-3-small`, and seamlessly updates the Qdrant vector database via HTTP PUT requests.

### 4. Stock Inventory & Procurement Automation
* **File:** `4. stock inventory.json`
* **Stack:** n8n, Google Sheets, Gmail API, Schedule Trigger.
* **Architecture:** Daily automated inventory screening with complex routing logic. Automatically identifies items below minimum thresholds, generates Purchase Orders, and emails suppliers directly.

### 5. AI Lead Management & Priority Routing
* **File:** *(Upload your n8n lead management json here, e.g., `3. Lead management.json`)*
* **Stack:** n8n, Webhooks, OpenAI, Telegram.
* **Architecture:** Captures incoming multi-language leads, translates them, assigns a priority score (1-5) using AI, and routes high-priority leads instantly to sales via Telegram.

---

## ⚡ Make.com Scenarios (SaaS Integrations)

### 1. Real-Time AI Assistant with Perplexity
* **File:** `1.telegram bot+supabase-answer questions+memory.blueprint.json`
* **Stack:** Make.com, Telegram, Perplexity AI, Supabase.
* **Architecture:** An intelligent agent that utilizes Perplexity AI for live web search and data retrieval, coupled with Supabase to store and manage long-term dialogue history for individual Telegram users.

### 2. Automated Expense & Invoice OCR Parser
* **File:** `2.Invoice viewer(data from invoices to google sheets .blueprint.json`
* **Stack:** Make.com, Gmail, OpenAI Vision, PDF.co, Google Sheets, Google Drive.
* **Architecture:** Monitors inbox for financial documents. Uses dynamic routing: routes images to OpenAI Vision and PDFs to PDF.co for text extraction. Parses the output JSON to log amounts, dates, and vendors strictly into Google Sheets.

---
**👨‍💻 Connect with me:**
* [LinkedIn](www.linkedin.com/in/alsemkin25)
* Email: alsemkin25@gmail.com
