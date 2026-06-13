class PdfFactory extends DocumentFactory {
    Document createDocument() {
        return new PdfDocument();
    }
}