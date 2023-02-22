import { redirect } from "react-router";
import { logout } from '~/utils/session.server';

export async function action({request}) {
    return logout(request);
}

export async function loader() {
    return redirect('/');
}