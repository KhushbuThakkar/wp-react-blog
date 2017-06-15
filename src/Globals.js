class Globals {
	constructor(props) {
		//this.API_ROOT_URL  = 'http://192.168.99.100:2375/api/v1/clients';
		//this.API_ROOT_URL_MASTER  = 'http://192.168.99.100:2375/api/v1';
		this.WP_URL  = 'http://wpreact.dev/';
		this.WP_API_URL = 'http://wpreact.dev/wp-json/';
		// We are storing these in Globals as these needs to be accessed a lot in the whole application. No point in getting these values from Redux Store everytime (It will be difficult sometimes, as not all components will be bound to Redux Store)
		this.EMAIL = null;
		this.PASSWORD = null;
	}
}

// singleton pattern to get the same instance whenever we call the Globals class
export default(new Globals);