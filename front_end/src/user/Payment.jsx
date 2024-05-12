import Sidebar from "./components/Sidebar";
import NavbarUser from "../shared/Navbar";

import { Card } from "flowbite-react";
import Loading from "../shared/Loading";
import useBidder from "../hooks/useBidder"

export default function Payment() {
  const {getBudget, setBudget} = require("../hooks/userBudget")
  const {getUserID} = require('../hooks/userID')
  const datas = useBidder();
  var budget = ""
  if (datas.isLoading) return <Loading/>;
  var res = datas.auction.allBidder;
  for (let i = 0; i < res.length; i++) {
    if (res[i]._id === getUserID()){
      budget = res[i].budget;
      setBudget(budget);
    }
  }
  return (
    <div>
      <NavbarUser></NavbarUser>
      <div className="flex py-8 pl-24">
        <Sidebar></Sidebar>
        <Card className="w-3/6 px-4">
          <div className="flex">
            <p className="text-xl my--4">Tài khoản của tôi</p>
          </div>
          <hr className="my-2 h-px border-t-0 bg-neutral-200" />
          <div className="flex">
            <h>Số dư tài khoản</h>
          </div>
          <div>
            <h>{budget}</h>
          </div>
          <hr className="my-2 h-px border-t-0 bg-neutral-200" />
          <div className="flex">
          </div>
        </Card>
      </div>
    </div>
  );
}
