function UnregisteredSocial() {
    return (
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Contact informations can be provided only for registered users</p>
          <p>You can register during filling survey</p>
        </div>
    );
}

export default UnregisteredSocial;