
// HAS NO LINKS YET
function Footer() {
    return (
        <footer className="bg-[#2F2D29] text-[#f5f5f5] py-10 px-40 flex justify-between">
            <div className="grid grid-cols-5 gap-24">
                <div className="col-span-2">
                    <span className="text-white text-xl font-semibold text-nowrap">Chinese Student Association</span>
                    <p className="text-sm">
                    University of California, Berkeley <br/>
                    2465 Bancroft Way <br/>
                    Berkeley, CA 94704
                    </p>
                </div>
                <div className="">
                    <span className="text-white text-xl font-semibold">Explore</span>
                    <p className="text-sm">
                    About <br/>
                    Events <br/>
                    Our Team <br/>
                    Join Us
                    </p>
                </div>
                <div className="">
                    <span className="text-white text-xl font-semibold">Contact</span>
                    <p className="text-sm">
                    Email Us <br/>
                    Join Our Mailing List <br/>
                    </p>
                </div>
                <div className="">
                    <span className="text-white text-xl font-semibold">Connect</span>
                    <p className="text-sm">
                    Email Us <br/>
                    Join Our Mailing List <br/>
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;
