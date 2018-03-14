/**
 * @author: Thiago Lima - <thiagobr@br.ibm.com>
 * 
 * @class: { PMO }
 * @interface: { PMOSettings }
 * 
 * @description: Generic class which's used to 
 * define its typings and access modifiers. 
 * It's being imported in { PMOService }
 * 
 */

interface PMOSettings <T, Z, Y, W> {

    ibmId: String;
    CMRNumber: Number;
    contractNumber: String;
    workNumber: String;
    status: String;
    rejectCriteria: String,
    crated: Date,
    lastModified: Date;
    rejectionEmailSent: Boolean;
    
}

export class PMO implements PMOSettings <String, Number, Date, Boolean> {

    public ibmId;
    public CMRNumber;
    public contractNumber;
    public workNumber;
    public status;
    public rejectCriteria;
    public crated;
    public lastModified;
    public rejectionEmailSent;

}
