export class Asset{
    public AssetName:string;
    public AssetSerialNumber:string;
    public AssetOwner:string;
    public ApprovedBy:string;
    public AssetType:string;

    constructor(name: string, serialNumber:string, owner:string, approvedBy:string, assetType: string){
        this.AssetName = name;
        this.AssetSerialNumber = serialNumber;
        this.AssetOwner = owner;
        this.ApprovedBy = approvedBy;
        this.AssetType  = assetType;
    }
}