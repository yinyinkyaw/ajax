<?php

class Database
{
    // specify your own database credentials
    private $host = "127.0.0.1";
    private $db_name = "book_store";
    private $username = "root";
    private $password = "";

    // get the database connection
    public function getConnection()
    {

        try {
            $conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);

            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (PDOException $exception) {
            die("Connection error " . $exception->getMessage());
        }
    }
}
