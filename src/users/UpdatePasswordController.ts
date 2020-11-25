import { Users } from './users';
import { Context, ServerController, ServerMethod, StringColumn } from "@remult/core";

@ServerController({
    allowed:context=>context.isSignedIn(),
    key:'updatePassword'
})
export class UpdatePasswordController {
    constructor(private context: Context) {
    }
    password = new StringColumn();
    confirmPassword = new StringColumn({
        validate: () => {
            if (this.password.value != this.confirmPassword.value)
                this.password.validationError = "Password doesn't match the confirm password";
        }
    });
    @ServerMethod()
    async SavePassword() {
        const u = await this.context.for(Users).findId(this.context.user.id);
        u.password.value = this.password.value;
        await u.save();
    }
}