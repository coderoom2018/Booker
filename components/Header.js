import Head from "next/head";
import Link from "next/link";

export default () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
    <Head>
      <meta
        name="viewport"
        content="initial-scale=1.2, width=device-width"
        key="viewport"
      />
    </Head>
    <div id="navbar">
      
        <div className="navbar_btn">
          <Link href="/index"><a>Books</a></Link>
        </div>
        <div className="navbar_btn">
          <Link href="/mypage"><a>Mypage</a></Link>
        </div>
        <div className="navbar_btn">
          <Link href="/sign"><a>Sign</a></Link>
        </div>
      
    </div>

    <style jsx>
      {`
        * {
          box-shadow: 0px 0px 0px 0.1px black;
        }
        #navbar {
          display: flex;
        }
        .navbar_btn {
          margin-left: 10px;
          padding: 10px;
          font-size: 20px;
        }
      `}
    </style>
  </div>
);
