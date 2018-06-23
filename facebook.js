var Facebook = /** @class */ (function () {
    function Facebook(Name, OtherName, location, Livesin, Birthday, Age, FamilyMembers, Contact, Emailid) {
        var _this = this;
        this.Name = Name;
        this.OtherName = OtherName;
        this.location = location;
        this.Livesin = Livesin;
        this.Birthday = Birthday;
        this.Age = Age;
        this.FamilyMembers = FamilyMembers;
        this.Contact = Contact;
        this.Emailid = Emailid;
        this.getName = function () {
            return _this.Name;
        };
        this.getOtherName = function () {
            return _this.OtherName;
        };
        this.getlocation = function () {
            return _this.location;
        };
        this.getLivesin = function () {
            return _this.Livesin;
        };
        this.getBirthday = function () {
            return _this.Birthday;
        };
        this.getAge = function () {
            return _this.Age;
        };
        this.getFamilyMembers = function () {
            return _this.FamilyMembers;
        };
        this.getContact = function () {
            return _this.Contact;
        };
        this.getEmailid = function () {
            return _this.Emailid;
        };
        this.Name = Name;
        this.OtherName = OtherName;
        this.location = location;
        this.Livesin = Livesin;
        this.Birthday = Birthday;
        this.Age = Age;
        this.FamilyMembers = FamilyMembers;
        this.Contact = Contact;
        this.Emailid = Emailid;
    }
    return Facebook;
}());
var Rakesh = new Facebook("Rakesh C R", "Dimitri", "Chikmagalur", "Bangalore", "01/03/1994", 24, 5, 7019906178, "rakeshcr7@gmail.com");
console.log("Below is the detail of Rakesh's about section");
console.log("Name: " + Rakesh.getName());
console.log("Location: " + Rakesh.getlocation());
console.log("Lives in: " + Rakesh.getLivesin());
console.log("Birthday: " + Rakesh.getBirthday());
console.log("Age: " + Rakesh.getAge());
console.log("Family-members: " + Rakesh.getFamilyMembers());
console.log("Contact: " + Rakesh.getContact());
console.log("Email-id: " + Rakesh.getEmailid());
