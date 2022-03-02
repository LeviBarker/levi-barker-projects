import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from 'firebase/compat/app';

@Injectable({providedIn: "root"})
export class AuthUtilService {
    constructor(private auth: AngularFireAuth){}

    async signInWithGoogle(){
        await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    async signOut(){
        await this.auth.signOut();
    }
}