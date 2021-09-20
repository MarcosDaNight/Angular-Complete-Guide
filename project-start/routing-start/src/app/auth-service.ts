export class AuthService {
    loggedIn = false;

    isAuthenticade() {
        const promise = new Promise(
            (resolve, rejecte) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                }, 800);
            }
        );
        return promise;
    }

    login(){
        this.loggedIn = true;
    }

    logout() {
        this.loggedIn = false;
    }
}