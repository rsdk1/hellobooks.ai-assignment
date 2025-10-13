# HelloBooks.ai Automation with Playwright

This repository contains automation scripts for **HelloBooks.ai** using **JavaScript** and **Playwright**. The automation covers web interactions with features such as cross-browser execution, data generation using Faker, and CI/CD integration via GitHub Actions.

---

## Table of Contents

- [Overview](#overview)  
- [Project Structure](#project-structure)  
- [Technologies Used](#technologies-used)  
- [Key Features](#key-features)  
- [Setup & Installation](#setup--installation)  
- [Running Tests Locally](#running-tests-locally)  
- [Cross-Browser Testing](#cross-browser-testing)  
- [CI/CD Integration](#cicd-integration)  
- [Limitations & Challenges](#limitations--challenges)  
- [Page Object Model](#page-object-model)  

---

## Overview

This project automates the **HelloBooks.ai** web application using **Playwright**. The scripts perform automated interactions on different pages of the application and are designed to run across multiple browsers.  

Automation focuses on:

- Navigating through pages (except login/signup due to Cloudflare protection).  
- Verifying elements, content, and basic workflows.  
- Supporting cross-browser execution (Chromium, Firefox, Webkit).  

---

## Project Structure
HelloBooks.ai-Assignment/
│
├─ tests/ # Contains all Playwright test scripts
├─ pages/ # Page Object Model files
├─ utils/ # Utility functions (e.g., Faker data generation)
├─ package.json
├─ playwright.config.js # Playwright configuration
└─ .github/
└─ workflows/
└─ hellobooks.yml # GitHub Actions workflow

## Technologies Used

- **JavaScript** (ES6)  
- **Playwright** for browser automation  
- **Faker.js** for generating test data  
- **GitHub Actions** for CI/CD  
- **Node.js** and **npm** for dependency management  

---
## Setup & Installation

1. Clone the repository:  

```bash
git clone https://github.com/rsdk1/HelloBooks.ai-Assignment.git
cd HelloBooks.ai-Assignment
---

 AUTHOR : RajaSuma.D.K
 Linkedin:www.linkedin.com/in/rsdk 
 Github: https://github.com/rsdk1
 Website: https://rsdk.my.canva.site/

