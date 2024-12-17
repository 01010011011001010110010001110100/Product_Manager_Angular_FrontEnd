export class editProductRequest {
    public name?: string;
    public detail?: string;
    public typeCurrencyId?: string;
    public typePaymentId?: string;
    public implementationCost?: number;
    public instalationCost?: number;
    public regularPrice?: number;
    public advancePrice?: number;
    public isActive?: boolean;
    public updateOn?: string;
    
    // Relationships with other tables
    public typeCurrency?: string;
    public typePayment?: string;
}