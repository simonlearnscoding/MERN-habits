export default function Home() {
  try {
    console.log("seas");
    return (
      <header>
        <div className="text-3xl">seas </div>

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
