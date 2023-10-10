import React from 'react';
import './footer.css';

function footer() {
  return (
    <div>
      <footer class="footer">
        <div class="container">
            <div class="row gy-5 gx-md-5">
                <div class="col-12 col-md-6">
                    <h2 class="footer_title"><a href="/">morent</a></h2>
                    <p class="footer_desc">Our vision is to provide convenience<br/>and help increase your sales business.</p>
                </div>
                <div class="col col-6 col-lg-2">
                    <h2 class="footer_head">about</h2>
                    <ul class="list-group">
                        <li class="list-group-item"><a href="/">How it Works</a></li>
                        <li class="list-group-item"><a href="/">Featured</a></li>
                        <li class="list-group-item"><a href="/">Partnership</a></li>
                        <li class="list-group-item"><a href="/">Business Relation</a></li>
                    </ul>
                </div>
                <div class="col-6 col-lg-2">
                    <h2 class="footer_head">community</h2>
                    <ul class="list-group">
                        <li class="list-group-item"><a href="/">Events</a></li>
                        <li class="list-group-item"><a href="/">Blog</a></li>
                        <li class="list-group-item"><a href="/">Podcast</a></li>
                        <li class="list-group-item"><a href="/">Invite a Friend</a></li>
                    </ul>
                </div>
                <div class="col-6 col-lg-2">
                    <h2 class="footer_head">socials</h2>
                    <ul class="list-group">
                        <li class="list-group-item"><a href="/">Discord</a></li>
                        <li class="list-group-item"><a href="/">Instagram</a></li>
                        <li class="list-group-item"><a href="/">Twitter</a></li>
                        <li class="list-group-item"><a href="/">Facebook</a></li>
                    </ul>
                </div>
            </div>
            <hr class="footer_border" />
            <div class="row">
                <div class="col-md-6 col-lg-6 order-2 order-md-1">
                    <p class="footer_copyright">&copy;2023 MORENT. All rights reserved</p>
                </div>
                <div class="col-md-6 col-lg-6 order-1 order-md-2">
                    <div class="footer_links">
                        <a href="/">Privacy &amp; Policy</a>
                        <a href="/">Terms &amp; Condition</a>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default footer