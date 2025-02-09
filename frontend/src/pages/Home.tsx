import { LogoutButton } from "@/components/LogoutButton";
import useEnsureUserExists from "@/hooks/useEnsureUserExists";
export default function Home() {
  useEnsureUserExists();
  try {
    return (
      <header>
        <div className="text-3xl">seas </div>
        <LogoutButton />

        {/* <SignedOut> */}
        {/*   <SignInButton /> */}
        {/* </SignedOut> */}
        {/* <SignedIn> */}
        {/*   <UserButton /> */}
        {/* </SignedIn> */}
      </header>
    );
  } catch (e) {
    console.error("oida na", e);
  }
}
