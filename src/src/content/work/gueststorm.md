---
title: Guest Storm
publishDate: 2020-03-02 00:00:00
img: /assets/gueststorm.jpg
img_alt: sdsdsd
description: |
  a multi tenant SaaS application that allows users to manage Guest Users in a Microsoft 365 tenant.
tags:
  - SaaS
  - Open Source
  - Microsoft 365
---

Guest Storm is a SaaS application that allows users to manage Guest Users in a Microsoft 365 tenant. It's an open source project that I started in 2023. The project is built with Blazor, a C#-based web framework that compiles to WebAssembly. This allows us to write the entire application in C#, including the frontend, and have it run in the browser. The backend is built with ASP.NET Core, a C#-based web framework that runs on the server. It doesn't use a database, instead it uses the Microsoft Graph API to interact with the Microsoft 365 tenant.

Some features:
- Create, update and delete Guest Users
- Create, update and delete Guest User Invitations
- Create, update and delete Guest User Policies
- Automatically remove Guest Users after a certain amount of time
- Automatically remove Guest User Invitations after a certain amount of time
- Automatically remove Guest User Policies after a certain amount of time

Tech Stack:
- Blazor
- ASP.NET Core
- Microsoft Graph API
- Azure AD
- Azure Functions
- Azure Storage
- Azure Key Vault
- Azure App Service
- GitHub Actions