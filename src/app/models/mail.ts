/**
 * @author: Thiago Lima - <thiagobr@br.ibm.com>
 * 
 * @class: { Mail }
 * @interface: { MailSettings }
 * 
 * @description: Generic class which's used to 
 * define its typings and access modifiers. 
 * It's being imported in { MailService }
 * 
 */

interface MailSettings <T> {

    sendTo: String;
    subject: String;
    content: String;

}

export class Mail implements MailSettings <Object> {

    public sendTo;
    public subject;
    public content;


}
