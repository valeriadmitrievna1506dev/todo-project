<p>
  <i>
    Application created with Node.js, PostgreSQL
  </i><br>
   <i>
    Tested with Postman
  </i>
</p>

<p>
  to start project run following command:<br />
  <b>npm install</b>
</p>
<p>
  to start server run following command:<br />
  <b>npm run server</b>
</p>

<p>
  <h3>Available methods</h3>
  <ul>
    <li>
      <b><i>/items</i> [GET]</b><br>
      <span>
        Returns all existing items in the database
      </span>
    </li>
		<li>
      <b><i>/items</i> [POST]</b><br>
      <span>
        Creates a new item and adds to the database
      </span>
    </li>
		<li>
      <b><i>/items/:id</i> [GET]</b><br>
      <span>
        Returns the item selected by ID
      </span>
    </li>
		<li>
      <b><i>/items/:id</i> [PUT]</b><br>
      <span>
        Changes the item selected by ID
      </span>
    </li>
		<li>
      <b><i>/items/:id</i> [DELETE]</b><br>
      <span>
        Deletes the item selected by ID
      </span>
    </li>
  </ul>
</p>
