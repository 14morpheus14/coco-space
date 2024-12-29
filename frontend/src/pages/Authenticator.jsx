import bg from "../assets/bg.jpeg";

const Authenticator = () => {
  return (
    <div
      className="text-white h-screen p-10"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(8px)",
      }}
    >
      <h1 className="pl-[35%] font-bold text-4xl">Register as a Service</h1>
      <div className="border-white border-2 rounded-lg m-10 bg-transparent border-solid p-6 flex flex-col gap-6">
        {/* Incentive 1 */}
        <div className="bg-black/50 p-4 rounded-md">
          <h2 className="font-semibold text-xl mb-2">1. Privacy-Preserving Authentication</h2>
          <p className="mb-1">
            <span className="font-bold">Value Proposition:</span> Market your service as privacy-first, a growing demand in sectors like healthcare, finance, and e-commerce. Stand out to privacy-conscious users and organizations.
          </p>
          <p>
            <span className="font-bold">Competitive Advantage:</span> Build trust and attract customers by offering privacy-preserving authentication, differentiating you from competitors.
          </p>
        </div>

        {/* Incentive 2 */}
        <div className="bg-black/50 p-4 rounded-md">
          <h2 className="font-semibold text-xl mb-2">2. Reduced Risk of Data Breaches</h2>
          <p>
            COCO decouples digital identity from real-world identifiers, minimizing liability for sensitive data storage. Save on compliance costs and reduce risks of lawsuits or penalties.
          </p>
        </div>

        {/* Incentive 3 */}
        <div className="bg-black/50 p-4 rounded-md">
          <h2 className="font-semibold text-xl mb-2">3. Token Economy Participation</h2>
          <ul className="list-disc list-inside">
            <li>
              <span className="font-bold">Token Utility:</span> Use your specific token pool (e.g., $COCO-[ServiceID]) to pay authenticators and reward loyal users.
            </li>
            <li>
              <span className="font-bold">Token Valuation:</span> As your ecosystem grows, increased token demand drives up its value, creating potential revenue through token sales.
            </li>
          </ul>
        </div>

        {/* Incentive 4 */}
        <div className="bg-black/50 p-4 rounded-md">
          <h2 className="font-semibold text-xl mb-2">4. Monetization Opportunities</h2>
          <p>
            Leverage COCO’s token economy for new revenue streams:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Offer premium services redeemable via service-specific tokens, such as enhanced security, exclusive features, or discounted rates.
            </li>
            <li>
              Facilitate token trading to generate transaction fees.
            </li>
          </ul>
        </div>

        {/* Incentive 5 */}
        <div className="bg-black/50 p-4 rounded-md">
          <h2 className="font-semibold text-xl mb-2">5. User Retention Through Gamification</h2>
          <p>
            Boost engagement with token-powered loyalty programs:
          </p>
          <ul className="list-disc list-inside">
            <li>Reward users with tokens for service usage, redeemable for discounts or premium access.</li>
            <li>Introduce gamified milestones like "Authenticate 5 times to earn 50 tokens."</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Authenticator;
