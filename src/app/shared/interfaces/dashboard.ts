export interface WorkQueue {
  "id": number,
  "type": string,
  "priority": string,
  "account": string,
  "due": string,
  "status": string
}

export interface Policies {
  "id": number,
  "accountId": number,
  "policyNo": string,
  "lob": string,
  "premium": number,
  "status": string,
  "effective": string,
  "expiration": string,
  "name": string
}
