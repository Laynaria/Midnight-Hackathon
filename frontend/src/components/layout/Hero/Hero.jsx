import "./hero.css";

export default function Hero() {
  return (
    <section className="hero flex items-center justify-center flex-col">
      <h2>Find best green rental car</h2>

      <div className="card">
        <div className="card-head">Find the best vehicles for your needs</div>
        <div className="card-body">
          <form className="form">
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Address"
              />
            </div>
            <div className="form-group-inline">
              <div>
                <label htmlFor="distance">Distance</label>
                <input
                  type="text"
                  id="distance"
                  name="distance"
                  placeholder="100 km"
                />
              </div>
              <div>
                <label htmlFor="passenger">Passenger</label>
                <input
                  type="text"
                  id="passenger"
                  name="passenger"
                  placeholder="2"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="date">Pick Up Date</label>
              <input type="text" id="date" name="date" placeholder="dd/mm/yy" />
            </div>
            <div className="form-group">
              <label htmlFor="hour">Hour</label>
              <input type="text" id="hour" name="hour" placeholder="20:00 AM" />
            </div>
          </form>
        </div>
        <div className="card-footer">
          <div className="btn btn-green">Find Car</div>
        </div>
      </div>
    </section>
  );
}
