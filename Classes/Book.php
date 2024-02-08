<?php

class Book extends Database
{
    public function __construct(private $keyword)
    {
    }

    public function search()
    {
        $filter = "%$this->keyword%";

        $query = "SELECT * FROM BOOKS where title LIKE :q";

        $stmt = parent::getConnection()->prepare($query);
        $stmt->bindParam(':q', $filter);
        $stmt->execute();

        $r = $stmt->setFetchMode(PDO::FETCH_ASSOC);
        return $stmt->fetchAll();
    }
}
