---
title: "Integration Overview"
seo_title: "Mendix Integrations Overview - Supported Tools"
seo_description: "Get an overview on what web services, data mapping, databases & connectors are compatible with Mendix from the official evaluation guide."
parent: "integration"
menu_order: 10
bg: "integration"
tags: [""]
---

## 1 How Can I Integrate with Mendix? {#integrate-with}

Integration has always been an important part of application development, but the topic has not received much attention in the marketplace for developing apps until now. The maturation in cloud-native and as-a-service software options has increased the need for APIs that connect disparate applications together to exchange data, trigger events, and orchestrate workflow processes.

At Mendix, we have made investments in the platform to make it easy to connect applications and services with each other in a variety of ways, most recently with REST. And while REST has become a standard for building APIs and web-services for applications to talk, it’s important to recognize that other web service protocols, standardized frameworks, and APIs remain valid options, depending on the problem you are trying to solve.

## 2 What Tools Can I Use for Integrating with Mendix?

Mendix offers you an extensive array of tools to handle integrations:

* [Message definitions](data-mappings#message-definition) – specify what messages you exchange with external systems
  * These can be based on XML schemas, JSON snippets, or entities defined in your domain models
* [Mappings](data-mappings) – use visual specifications of how to translate external messages to and from entities in your Mendix applications
* [Web services](service-consumption#consume-rest-api) – publish microflows as web service operations and call external web services from your microflows
* [REST services](service-consumption#consume-rest-api) – publish microflows and entities as REST resources and operations and call external REST APIs from your microflows
* [OData](data-querying#odata) – publish data in your application in a standardized REST format for easy use in business analytics tooling
* [Connectors](../app-lifecycle/app-store#connectors) – implement purpose-built connector modules that provide easy-to-use microflow activities integrated with third-party services
  * Examples include SAP, Kafka, Redis, and third-party services like Slack, Twitter, and Salesforce
* [Connector Kit](../enterprise-capabilities/extensibility#connector-kit) – the Mendix Connector Kit enables adding any custom integration using Java to Mendix in an easy, generic, and reusable way
* [Database integration](external-data#external-sql) – the Mendix [Database Connector](https://appstore.home.mendix.com/link/app/2888/) allows you to configure direct JDBC connections to your database of choice for executing SQL queries and stored procedures
