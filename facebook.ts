class Facebook {
	constructor(public Name: string, public OtherName: string, public location: string, public Livesin: string, public Birthday: any, public Age: number, public FamilyMembers: number, public Contact: number, public Emailid: string) {
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
	getName = () => {
		return this.Name
	}
	getOtherName = () => {
		return this.OtherName
	}
	getlocation = () => {
		return this.location
	}
	getLivesin = () => {
		return this.Livesin
	}
	getBirthday = () => {
		return this.Birthday
	}
	getAge = () => {
		return this.Age
	}
	getFamilyMembers = () => {
		return this.FamilyMembers
	}
	getContact = () => {
		return this.Contact
	}
	getEmailid = () => {
		return this.Emailid
	}

}
let Rakesh = new Facebook("Rakesh C R", "Dimitri", "Chikmagalur", "Bangalore", "01/03/1994", 24, 5, 7019906178, "rakeshcr7@gmail.com")
console.log("Below is the detail of Rakesh's about section")
console.log("Name: " + Rakesh.getName())
console.log("Location: " + Rakesh.getlocation())
console.log("Lives in: " + Rakesh.getLivesin())
console.log("Birthday: " + Rakesh.getBirthday())
console.log("Age: " + Rakesh.getAge())
console.log("Family-members: " + Rakesh.getFamilyMembers())
console.log("Contact: " + Rakesh.getContact())
console.log("Email-id: " + Rakesh.getEmailid())

