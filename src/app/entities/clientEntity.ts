import { baseEntity } from './general/baseEntity';

export class clientEntity extends baseEntity {
  public phoneNumber: string;
  public isActive: boolean;
  public isDeleted: boolean;
  public createdOn: Date;
  public updatedOn: Date;
  public deletedOn: Date;

  constructor(
    documentId: string,
    name: string,
    phoneNumber: string,
    isActive: boolean,
    isDeleted: boolean,
    createdOn: Date,
    updatedOn: Date,
    deletedOn: Date
  ) {
    super(documentId, name);
    this.phoneNumber = phoneNumber;
    this.isActive = isActive;
    this.isDeleted = isDeleted;
    this.createdOn = createdOn;
    this.updatedOn = updatedOn;
    this.deletedOn = deletedOn;
  }
}
