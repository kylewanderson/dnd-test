export interface PdfFormRequest {
  header: HeaderRequest;
  questions: string[];
}

export interface HeaderRequest {
  companyName: string;
  managerName: string;
  reportName: string;
  positionTitle: string;
  reviewDate: string;
}
