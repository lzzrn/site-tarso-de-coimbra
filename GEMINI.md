# Gemini Development Guidelines

This file outlines the directives and instructions provided for the development of the Tarso de Coimbra school portal.

## Project Structure and Technologies

*   **Framework:** React
*   **Routing:** React Router DOM
*   **UI Components:** shadcn/ui
*   **Backend:** Firebase

## Layout and Styling

*   **Layout:** The main layout should have a light blue (`cyan-600`) background.
*   **Content:** The page content should be rendered within a card with a `background` color.
*   **Width:** The layout should have a maximum width of 1200px (`max-w-screen-xl`) and be centered.
*   **Responsiveness:** The layout must be responsive.
*   **Color Scheme:** The color scheme should be predominantly in shades of blue, with no dark mode.
*   **Header:**
    *   The header should be sticky at the top.
    *   The "Tarso de Coimbra" title should be in the center.
    *   The menu icon should be on the left.
    *   The active navigation link should be bold.
    *   The mobile menu should not use buttons.
*   **Footer:**
    *   The footer should contain a "Fale Conosco" section and the address.

## Pages and Content

*   **Home Page:**
    *   Introduction to the school.
    *   "Agende uma visita" button that redirects to WhatsApp.
    *   Automatic image carousel (placeholder).
    *   Information about the partnership with PUC Minas.
    *   Testimonials from parents and students (placeholders).
*   **Other Pages:**
    *   O Centro Educacional
    *   Acadêmico
    *   Notícias e Eventos
    *   Contato
    *   These pages should have a default placeholder component.

## Development Workflow

*   Use `npx shadcn-ui@latest add <component>` to add new `shadcn/ui` components.
*   Do not run `npm run dev`, as it is being handled in a separate terminal.
