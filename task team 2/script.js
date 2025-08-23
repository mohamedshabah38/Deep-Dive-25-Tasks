function createArticleCardHTML() {
    return `
        <div class="article-card">
            <img src="./images/Rectangle 33.png" alt="Article Image" class="article-image">
            <div class="card-content">
                <div class="card-meta">
                    <span class="category">Design</span>
                    <span class="duration">3 Month</span>
                </div>
                <h2>AWS Certified solutions Architect</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <div class="card-footer">
                    <div class="author-info">
                        <img src="./images/2f32d3a9082c2e2832481561feec93a5e5c5e8d6.png" alt="Author Lina" class="author-avatar">
                        <span class="author-name">Lina</span>
                    </div>
                    <div class="price">
                        <span class="old-price">$100</span>
                        <span class="current-price">$80</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="article-card">
            <img src="./images/Group 249.png" alt="Article Image" class="article-image">
            <div class="card-content">
                <div class="card-meta">
                    <span class="category">Design</span>
                    <span class="duration">3 Month</span>
                </div>
                <h2>AWS Certified solutions Architect</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <div class="card-footer">
                    <div class="author-info">
                        <img src="./images/2f32d3a9082c2e2832481561feec93a5e5c5e8d6.png" alt="Author Lina" class="author-avatar">
                        <span class="author-name">Lina</span>
                    </div>
                    <div class="price">
                        <span class="old-price">$100</span>
                        <span class="current-price">$80</span>
                    </div>
                </div>
            </div>
        </div>
         <div class="article-card">
            <img src="./images/22.png" alt="Article Image" class="article-image">
            <div class="card-content">
                <div class="card-meta">
                    <span class="category">Design</span>
                    <span class="duration">3 Month</span>
                </div>
                <h2>AWS Certified solutions Architect</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <div class="card-footer">
                    <div class="author-info">
                        <img src="./images/2f32d3a9082c2e2832481561feec93a5e5c5e8d6.png" alt="Author Lina" class="author-avatar">
                        <span class="author-name">Lina</span>
                    </div>
                    <div class="price">
                        <span class="old-price">$100</span>
                        <span class="current-price">$80</span>
                    </div>
                </div>
            </div>
        </div>
         <div class="article-card">
            <img src="./images/11.png" alt="Article Image" class="article-image">
            <div class="card-content">
                <div class="card-meta">
                    <span class="category">Design</span>
                    <span class="duration">3 Month</span>
                </div>
                <h2>AWS Certified solutions Architect</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <div class="card-footer">
                    <div class="author-info">
                        <img src="./images/2f32d3a9082c2e2832481561feec93a5e5c5e8d6.png" alt="Author Lina" class="author-avatar">
                        <span class="author-name">Lina</span>
                    </div>
                    <div class="price">
                        <span class="old-price">$100</span>
                        <span class="current-price">$80</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}
const cardsContainer = document.getElementById('cards-container');
{
    cardsContainer.innerHTML += createArticleCardHTML();
}