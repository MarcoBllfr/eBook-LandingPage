<script>
 import {Button, FaqItems} from "$components";
 import twittwerIcon from "$assets/icons/twitter.webp";
</script>
<section class="faq-section">
    <h2 class="mb-l">Frequently asked questions</h2>
    <div class="faq-container">
     <FaqItems />
    </div>
    <div class="additional-info">
        <Button class="mt-s">Buy now</Button>
        <p class="mt-m">Any other questions?</p>
        <a href="https://x.com/">
            <p>Hit me up on X
                <img src={twittwerIcon} class="twitter-icon" alt=""/>
            </p>
           
        </a>
     </div>
</section>
<style>
.additional-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: grey;
  }

  .twitter-icon {
    width: 16px;
    height: 16px;
  }

  .additional-info a {
    text-decoration: underline;
  }
</style>