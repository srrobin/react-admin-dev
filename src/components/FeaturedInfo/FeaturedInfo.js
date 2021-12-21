import "./featuredinfo.css";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">compared to last month </span>
            </div>
            
            <div className="featuredItem">
                <span className="featuredTitle">sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownwardIcon className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">compared to last month </span>
            </div>
            
            <div className="featuredItem">
                <span className="featuredTitle">cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">+2.45 <ArrowUpwardIcon className="featuredIcon"/></span>
                </div>
                <span className="featuredSub">compared to last month </span>
            </div>
        </div>
    );
};

export default FeaturedInfo;