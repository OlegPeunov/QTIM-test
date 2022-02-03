import React from 'react';



function FullCardPage(props) {

  // console.log(props.card.link)

  return (
    
    <>
    
    <div id="content" className="site-content" style={{padding: " 0 200px"}}>
			<div id="primary" className="content-area column two-thirds single-portfolio">
				<main id="main" className="site-main">
				
				<article className="portfolio hentry">
				<header className="entry-header">
				<div className="entry-thumbnail">
					<img width="800" height="533" style={{ backgroundImage: `url(${props.card.link})` }}  className="place-card__image" />
				</div>
				<h1 className="entry-title">{props.card.title}</h1>
					</header>
				<div className="entry-content">
          <p>
            {props.card.description}
					</p>
					<blockquote>
						<p>
              {props.card.preview}
						</p>
					</blockquote>
				</div>
				</article>
				
			
	
				</main>

			</div>

			
			<div id="secondary" className="column third">
				<div className="widget-area">
					<aside className="widget">
						<h4 className="widget-title">Request similar project</h4>
						<form className="wpcf7" method="post" action="contact.php" id="contactform">
							<div className="form">
								<p><input type="text" name="name" placeholder="Name *"/></p>
								<p><input type="text" name="email" placeholder="E-mail Address *"/></p>
								<p><textarea name="comment" rows="3" placeholder="Message *"></textarea></p>
								<input type="submit" id="submit" className="clearfix btn" value="Send"/>
							</div>
						</form>
						<div className="done">								
							Your message has been sent. Thank you!
						</div>
					</aside>
				</div>
			</div>
		</div>
    
    </>
    
  );
  }
    
  export default FullCardPage;