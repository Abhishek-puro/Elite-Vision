import "jspdf";

declare module "jspdf" {
  interface jsPDF {
    lastAutoTable?: { finalY: number }; // ✅ Fix TypeScript error
  }
}
