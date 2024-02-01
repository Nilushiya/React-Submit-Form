-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 01, 2024 at 05:34 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `submitform`
--

-- --------------------------------------------------------

--
-- Table structure for table `formdetails`
--

CREATE TABLE `formdetails` (
  `id` int(255) NOT NULL,
  `name` varchar(40) NOT NULL,
  `mobile` int(10) NOT NULL,
  `mail` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `formdetails`
--

INSERT INTO `formdetails` (`id`, `name`, `mobile`, `mail`) VALUES
(1, ' Nilushiya ', 778045123, 'nilushiya@gmail.com'),
(2, 'Kanes', 765434234, 'dfsghj@gmail.com'),
(3, 'Nishni', 765434234, 'nishni@gmail.com'),
(4, 'Anish', 774567987, 'anish12@gmail.com'),
(5, 'Xcsi', 778945309, 'six34@gmail.com'),
(6, 'Nijomi', 754789267, 'nijo@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `formdetails`
--
ALTER TABLE `formdetails`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `formdetails`
--
ALTER TABLE `formdetails`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
