import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://scontent.fhan5-6.fna.fbcdn.net/v/t1.6435-9/243469197_4568885409861690_1828204768087771830_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=e3f864&_nc_ohc=hAHyoPFrYTwAX_Q1ejr&_nc_ht=scontent.fhan5-6.fna&oh=4d2f964a8a471f4f67b2106c1f1d3ef8&oe=619B1986"
        alt=""
      />
    </div>
  );
}
