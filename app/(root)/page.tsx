import HeaderBox from "@/components/ui/HeaderBox";
import RightSidebar from "@/components/ui/RightSidebar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {

    const loggedIn = await getLoggedInUser();

    return(
        <section className='home'>
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.name || 'Guest'}
                    subtext="Access and manage your account and transactions efficiently."
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>

                Recent transactions
            </div>
            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{currentBalance:123.5},{currentBalance:234.56}]}
            />
        </section>
    )
}

export default Home