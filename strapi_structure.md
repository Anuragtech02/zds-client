# Strapi Configuration for FAQ Section

To enable the FAQ section on the Solution pages, please configure your Strapi backend as follows:

## 1. Create "FAQ Item" Component
*   **Display Name**: FAQ Item
*   **Category**: `elements` (or `shared`)
*   **Icon**: `question` (or similar)
*   **Attributes**:
    *   `question`: **Text** (Short Text)
    *   `answer`: **Rich Text** (or Text/Long Text)

## 2. Create "FAQ" Component
*   **Display Name**: FAQ
*   **Category**: `sections` (or `shared`)
*   **Icon**: `layer` (or similar)
*   **Attributes**:
    *   `title`: **Text** (Short Text)
        *   *Default value*: "Frequently Asked Questions"
    *   `items`: **Component**
        *   Select **Repeatable** component
        *   Select the `FAQ Item` component created in step 1.

## 3. Update "Solution" Collection Type
*   Go to the **Solution** Content Type Builder.
*   Add a new field.
*   Select **Component**.
*   Name it `faq`.
*   Select **Single** component.
*   Select the `FAQ` component created in step 2.
*   Save and publish.

## 4. Add Content
*   Go to a Solution entry.
*   You will see the new **FAQ** section.
*   Click to add it, set the title (optional), and add Question/Answer pairs.
