import { AbstractControl } from "@angular/forms";

export class CustomeValidator {
    static haveSpace(control: AbstractControl) {
        if (control.value) {
            if (control.value.indexOf(' ') !== -1) {
                return { hasSpaceCheck: true };
            } else {
                return null;
            }
        }
    }

    static haveDotCom(control: AbstractControl) {
        if (control.value) {
            if (control.value.endsWith('.com') !== true) {
                return { endWithDotComCheck: true };
            } else {
                return null;
            }
        }

    }

}
