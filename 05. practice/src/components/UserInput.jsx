export default function UserInput({ inputValues, onChange }) {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    inputValues;
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">INITIAL INVESTMENT</label>
          <input
            type="number"
            id="initialInvestment"
            onChange={(event) =>
              onChange("initialInvestment", +event.target.value)
            }
            value={initialInvestment}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">ANNUAL INVESTMENT</label>
          <input
            type="number"
            id="annualInvestment"
            onChange={(event) =>
              onChange("annualInvestment", +event.target.value)
            }
            value={annualInvestment}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">EXPECTED RETURN</label>
          <input
            type="number"
            id="expectedReturn"
            onChange={(event) =>
              onChange("expectedReturn", +event.target.value)
            }
            value={expectedReturn}
          />
        </p>
        <p>
          <label htmlFor="duration">DURATION</label>
          <input
            type="number"
            id="duration"
            min={1}
            onChange={(event) => onChange("duration", +event.target.value)}
            value={duration}
          />
        </p>
      </div>
    </section>
  );
}
