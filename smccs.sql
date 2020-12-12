-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 07, 2020 at 04:22 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `smccs`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_apply_leave`
--

CREATE TABLE `tbl_apply_leave` (
  `l_id` int(11) NOT NULL,
  `w_id` int(11) NOT NULL,
  `s_date` datetime NOT NULL,
  `e_date` datetime NOT NULL,
  `l_description` mediumtext NOT NULL,
  `status` bit(1) NOT NULL DEFAULT b'0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_apply_leave`
--

INSERT INTO `tbl_apply_leave` (`l_id`, `w_id`, `s_date`, `e_date`, `l_description`, `status`) VALUES
(1, 5, '2020-04-08 00:00:00', '2020-04-21 00:00:00', 'dsdsds', b'1'),
(2, 5, '2020-04-29 00:00:00', '2020-04-29 00:00:00', 'xyz', b'0');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_citizen`
--

CREATE TABLE `tbl_citizen` (
  `c_id` int(11) NOT NULL,
  `c_fname` varchar(30) NOT NULL,
  `c_lname` varchar(30) NOT NULL,
  `c_contact_no` varchar(10) NOT NULL,
  `c_gender` varchar(1) NOT NULL,
  `c_address` varchar(100) NOT NULL,
  `c_pincode` varchar(6) NOT NULL,
  `c_is_active` bit(1) NOT NULL,
  `c_lst_chng_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_citizen`
--

INSERT INTO `tbl_citizen` (`c_id`, `c_fname`, `c_lname`, `c_contact_no`, `c_gender`, `c_address`, `c_pincode`, `c_is_active`, `c_lst_chng_date`) VALUES
(2, 'dhruv', 'variya', '7621975056', 'm', 'katargam                                          ', '', b'1', '2020-03-18 12:18:51'),
(4, 'bhavin', 'gediya', '7621599846', 'm', 'varachha', '395006', b'1', '2020-04-27 11:10:57'),
(5, 'dhruv', 'variya', '7621978056', 'm', 'katargam', '395004', b'0', '2020-04-28 08:45:03'),
(7, 'Patel', 'jenish', '8965741230', 'm', 'B-31 Yogeshwar Society Surat.', '395006', b'0', '2020-09-19 09:39:58');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cmp_asgn_hgr_auth`
--

CREATE TABLE `tbl_cmp_asgn_hgr_auth` (
  `cmp_asgn_hgr_id` int(11) NOT NULL,
  `post_cmp_id` int(11) NOT NULL,
  `description` varchar(250) NOT NULL,
  `cit_id` int(11) NOT NULL,
  `cmp_asn_date` datetime NOT NULL DEFAULT current_timestamp(),
  `lst_chng_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_cmp_asgn_hgr_auth`
--

INSERT INTO `tbl_cmp_asgn_hgr_auth` (`cmp_asgn_hgr_id`, `post_cmp_id`, `description`, `cit_id`, `cmp_asn_date`, `lst_chng_date`) VALUES
(1, 12, 'assign complaint are solved this complain', 2, '0000-00-00 00:00:00', '2020-04-24 13:45:55'),
(2, 24, 'not action', 2, '2020-04-28 07:59:30', '2020-04-28 07:59:30'),
(3, 25, 'high authority', 2, '2020-04-28 08:39:01', '2020-04-28 08:39:01'),
(4, 26, 'complaint can not solved..', 5, '2020-04-28 14:33:54', '2020-04-28 14:33:54');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cmp_asgn_sec`
--

CREATE TABLE `tbl_cmp_asgn_sec` (
  `cmp_asg_sec_id` int(11) NOT NULL,
  `post_cmp_id` int(11) NOT NULL,
  `sec_o_id` int(11) NOT NULL,
  `description` mediumtext NOT NULL,
  `s_adm_id` int(11) NOT NULL,
  `cmp_asn_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_cmp_asgn_sec`
--

INSERT INTO `tbl_cmp_asgn_sec` (`cmp_asg_sec_id`, `post_cmp_id`, `sec_o_id`, `description`, `s_adm_id`, `cmp_asn_date`) VALUES
(1, 12, 15, 'assign complaint are solved this complain', 1, '2020-04-24 21:21:19'),
(4, 12, 15, 'assign complaint are solved this complain', 1, '2020-04-27 10:50:30'),
(5, 24, 15, 'not action', 1, '2020-04-28 08:00:09'),
(6, 25, 15, 'high authority', 1, '2020-04-28 08:39:59'),
(7, 25, 15, 'high authority', 1, '2020-04-28 08:40:32'),
(8, 26, 15, 'complaint can not solved..', 1, '2020-04-28 14:35:01');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cmp_asgn_sec_wrk`
--

CREATE TABLE `tbl_cmp_asgn_sec_wrk` (
  `cmp_asg_sec_wrk_id` int(11) NOT NULL,
  `post_cmp_id` int(11) NOT NULL,
  `description` varchar(250) NOT NULL,
  `sec_adm_id` int(11) NOT NULL,
  `w_id` int(11) NOT NULL,
  `cmp_asn_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_cmp_asgn_sec_wrk`
--

INSERT INTO `tbl_cmp_asgn_sec_wrk` (`cmp_asg_sec_wrk_id`, `post_cmp_id`, `description`, `sec_adm_id`, `w_id`, `cmp_asn_date`) VALUES
(1, 12, 'assign complaint are solved this complain', 15, 5, '2020-04-25 11:44:49'),
(2, 12, 'assign complaint are solved this complain', 15, 5, '2020-04-27 11:25:19'),
(3, 24, 'not action', 15, 5, '2020-04-28 08:00:47'),
(4, 25, 'high authority', 15, 5, '2020-04-28 08:41:22'),
(5, 26, 'complaint can not solved..', 15, 5, '2020-04-28 14:35:58');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cmp_category`
--

CREATE TABLE `tbl_cmp_category` (
  `cmp_id` int(11) NOT NULL,
  `cmp_type` varchar(250) NOT NULL,
  `is_active` bit(1) NOT NULL,
  `lst_chng_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_cmp_category`
--

INSERT INTO `tbl_cmp_category` (`cmp_id`, `cmp_type`, `is_active`, `lst_chng_date`) VALUES
(4, 'Garbage and Cleanliness', b'1', '2020-04-02 11:31:09'),
(5, 'Mosquitoes and Mosquito borne Diseases', b'1', '2020-04-02 11:31:32'),
(6, 'Roads and Footpath', b'1', '2020-04-02 11:31:51'),
(7, 'Water Supply', b'1', '2020-04-02 11:32:09'),
(8, 'Drainage and Storm Drain', b'1', '2020-04-02 11:32:24'),
(9, 'Street light', b'1', '2020-04-02 11:32:39'),
(10, 'Door to Door Garbage Collection', b'1', '2020-04-02 11:33:25'),
(11, 'Others', b'1', '2020-04-02 11:33:52');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cmp_photo`
--

CREATE TABLE `tbl_cmp_photo` (
  `i_id` int(11) NOT NULL,
  `cmp_post_id` int(11) NOT NULL,
  `img_name` varchar(255) NOT NULL,
  `is_active` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_cmp_photo`
--

INSERT INTO `tbl_cmp_photo` (`i_id`, `cmp_post_id`, `img_name`, `is_active`) VALUES
(10, 12, '2-49-12(10).jpg', 0),
(11, 13, '2-29-13(11).jpg', 0),
(12, 14, '2-14-14(12).jpg', 0),
(13, 15, '2-20-15(13).jpg', 0),
(14, 16, '2-14-16(14).jpg', 0),
(15, 17, '2-1-17(15).jpg', 0),
(16, 18, '2-11-18(16).jpg', 0),
(17, 18, '2-11-18(17).png', 0),
(18, 19, '2-14-19(18).jpg', 0),
(19, 20, '2-33-20(19).png', 0),
(20, 22, '2-29-22(20).jpeg', 0),
(21, 23, '2-35-23(21).jpeg', 0),
(22, 24, '2-49-24(22).jpeg', 0),
(23, 25, '2-49-25(23).jpeg', 0),
(24, 26, '5-49-26(24).jpeg', 0),
(25, 27, '5-51-27(25).png', 0),
(26, 29, '5-57-29(26).png', 0),
(28, 30, '6-65-30(28).jpg', 0),
(29, 31, '6-1-31(29).jpg', 0),
(30, 31, '6-1-31(30).jpg', 0),
(31, 32, '6-39-32(31).jpg', 0),
(32, 32, '6-39-32(32).jpg', 0),
(33, 33, '5-27-33(33).jpg', 0),
(34, 33, '5-27-33(34).jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cmp_sub_category`
--

CREATE TABLE `tbl_cmp_sub_category` (
  `sub_ctg_id` int(11) NOT NULL,
  `sub_name` varchar(250) NOT NULL,
  `cmp_id` int(11) NOT NULL,
  `time_duration` int(11) NOT NULL,
  `is_active` bit(1) NOT NULL,
  `lst_chng_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_cmp_sub_category`
--

INSERT INTO `tbl_cmp_sub_category` (`sub_ctg_id`, `sub_name`, `cmp_id`, `time_duration`, `is_active`, `lst_chng_date`) VALUES
(1, 'Container and dustbin not lifted', 4, 0, b'1', '2020-04-02 11:37:47'),
(2, 'Cleaning not carried out', 4, 0, b'1', '2020-04-02 11:39:34'),
(3, 'other', 4, 0, b'1', '2020-04-02 11:39:55'),
(4, 'Moaquitoes breeding site', 5, 0, b'1', '2020-04-02 11:41:09'),
(5, 'Mosquitoes Nuisance', 5, 0, b'1', '2020-04-02 11:41:56'),
(12, 'Damaged Road', 6, 0, b'1', '2020-04-27 22:00:44'),
(13, 'Damaged Footpath', 6, 0, b'1', '2020-04-27 22:01:08'),
(14, 'Other', 6, 0, b'1', '2020-04-27 22:02:00'),
(15, 'Insufficient supply pressure', 7, 0, b'1', '2020-04-27 22:26:22'),
(16, 'Pipeline leakage', 7, 0, b'1', '2020-04-27 22:26:44'),
(17, 'Overflowing drainage', 8, 0, b'1', '2020-04-27 22:27:35'),
(18, 'Leakage in drainage line', 8, 0, b'1', '2020-04-27 22:28:04'),
(19, 'choked drainage on Road', 8, 0, b'1', '2020-04-27 22:28:29'),
(20, 'Insufficient lighting', 9, 0, b'1', '2020-04-27 22:29:12'),
(21, 'Street light not working', 9, 0, b'1', '2020-04-27 22:29:29'),
(22, 'Street light pole collapsed', 9, 0, b'1', '2020-04-27 22:29:48'),
(23, 'Door to Door Garbage not collected', 10, 0, b'1', '2020-04-27 22:30:31');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cmp_video`
--

CREATE TABLE `tbl_cmp_video` (
  `v_id` int(11) NOT NULL,
  `cmp_post_id` int(11) NOT NULL,
  `v_name` varchar(255) NOT NULL,
  `is_active` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_cmp_video`
--

INSERT INTO `tbl_cmp_video` (`v_id`, `cmp_post_id`, `v_name`, `is_active`) VALUES
(1, 19, '2-14-19(0)', 0),
(2, 20, '2-33-20(2).mp4', 0),
(3, 22, '2-29-22(3).mp4', 0),
(4, 23, '2-35-23(4).mp4', 0),
(5, 24, '2-49-24(5).mp4', 0),
(6, 25, '2-49-25(6).mp4', 0),
(7, 26, '5-49-26(7).mp4', 0),
(8, 27, '5-51-27(8).mp4', 0),
(9, 29, '5-57-29(9).mp4', 0),
(10, 31, '6-1-31(10).mp4', 0),
(11, 33, '5-27-33(11).mp4', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_emergence_cmp_solver`
--

CREATE TABLE `tbl_emergence_cmp_solver` (
  `ecs_id` int(11) NOT NULL,
  `ecs_fname` varchar(50) NOT NULL,
  `ecs_lname` varchar(50) NOT NULL,
  `ecs_contact_no` varchar(15) NOT NULL,
  `ecs_gender` varchar(1) NOT NULL,
  `ecs_address` varchar(250) NOT NULL,
  `ecs_pincode` varchar(10) NOT NULL,
  `ecs_job_pincode` varchar(10) NOT NULL,
  `ecs_is_active` bit(1) NOT NULL,
  `ecs_lst_chng_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_emergence_cmp_solver`
--

INSERT INTO `tbl_emergence_cmp_solver` (`ecs_id`, `ecs_fname`, `ecs_lname`, `ecs_contact_no`, `ecs_gender`, `ecs_address`, `ecs_pincode`, `ecs_job_pincode`, `ecs_is_active`, `ecs_lst_chng_date`) VALUES
(2, 'dhruv', 'sddsd', '75695466', 'm', 'sdsdwsasds', '592922', '395009', b'0', '0000-00-00 00:00:00'),
(3, 'hardik', 'Rathod', '7958684298', 'm', 'katargam', '395004', '395004', b'0', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_employee`
--

CREATE TABLE `tbl_employee` (
  `w_id` int(11) NOT NULL,
  `w_fname` varchar(30) NOT NULL,
  `w_lname` varchar(30) NOT NULL,
  `w_contact_no` varchar(10) NOT NULL,
  `w_gender` varchar(1) NOT NULL,
  `w_address` varchar(100) NOT NULL,
  `w_pincode` varchar(6) NOT NULL,
  `w_job_pincode` varchar(6) NOT NULL,
  `w_is_active` bit(1) NOT NULL,
  `w_lst_chng_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_employee`
--

INSERT INTO `tbl_employee` (`w_id`, `w_fname`, `w_lname`, `w_contact_no`, `w_gender`, `w_address`, `w_pincode`, `w_job_pincode`, `w_is_active`, `w_lst_chng_date`) VALUES
(5, 'jenish', 'patel', '7895865458', 'm', 'KATARGAM', '369636', '395002', b'1', '2020-02-21 13:53:56');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_feedback`
--

CREATE TABLE `tbl_feedback` (
  `f_id` int(11) NOT NULL,
  `cit_id` int(11) NOT NULL,
  `fd_desc` varchar(250) NOT NULL,
  `is_active` bit(1) NOT NULL,
  `lst_chng_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_feedback`
--

INSERT INTO `tbl_feedback` (`f_id`, `cit_id`, `fd_desc`, `is_active`, `lst_chng_date`) VALUES
(1, 2, 'good job', b'1', '2020-04-22 21:30:03'),
(2, 2, 'good job', b'1', '2020-04-23 13:34:55'),
(3, 2, 'ddddd', b'1', '2020-04-23 13:38:28'),
(4, 2, 'ddddd', b'0', '2020-04-23 13:38:35'),
(5, 2, 'asoom', b'0', '2020-04-26 22:25:36'),
(6, 2, 'good', b'0', '2020-04-26 22:31:12'),
(7, 5, 'xyz...', b'0', '2020-04-28 14:31:06'),
(8, 6, 'Ok SMCCS are do the work good and best.', b'1', '2020-09-18 22:47:30');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_login_master`
--

CREATE TABLE `tbl_login_master` (
  `lgn_id` int(11) NOT NULL,
  `lgn_email_id` varchar(50) NOT NULL,
  `lgn_pwd` varchar(32) NOT NULL,
  `type_id` int(11) NOT NULL,
  `lgn_details_id` int(11) NOT NULL,
  `is_active` bit(1) NOT NULL,
  `lst_chng_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_login_master`
--

INSERT INTO `tbl_login_master` (`lgn_id`, `lgn_email_id`, `lgn_pwd`, `type_id`, `lgn_details_id`, `is_active`, `lst_chng_date`) VALUES
(1, 'rathoddhruv922@gmail.com', '12345@Dhruv', 1, 1, b'1', '2020-02-15 16:25:25'),
(16, 'jenishchachad@gmail.com', '123456@ffFF', 4, 5, b'0', '2020-02-21 13:53:56'),
(47, 'dhruvvariyarock@gmail.com', '123456@Xyz', 3, 5, b'1', '2020-04-28 08:43:53'),
(48, 'rathodkishan@gmail.com', '123456@Dhruv', 2, 15, b'0', '2020-04-23 10:56:44'),
(50, 'bhavingediya123@gmail.com', '123456@Bhavin', 3, 4, b'1', '2020-04-27 11:09:43'),
(53, 'mitulvariya@gmail.com', '123456@Dhruv', 2, 19, b'0', '2020-04-28 08:31:38'),
(65, 'bhavingediya123@gmail.com', 'Bhavin@12345', 2, 20, b'0', '2020-09-19 09:46:04'),
(73, 'xdsdssdyz@gmail.com', '123456@Xyzdf', 2, 1, b'0', '2020-10-24 13:16:26'),
(74, 'axayrathod1998@gmail.com', '123456@ffFF', 5, 2, b'0', '2020-10-24 14:55:18'),
(75, 'hardikrathod12@gmail.com', '123456@Hardik', 5, 3, b'0', '2020-11-02 21:01:11');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_post_cmp`
--

CREATE TABLE `tbl_post_cmp` (
  `post_cmp_id` int(11) NOT NULL,
  `cit_id` int(11) NOT NULL,
  `sec_id` int(11) NOT NULL,
  `sub_ctg_id` int(11) NOT NULL,
  `cmp_desc` varchar(200) NOT NULL,
  `cmp_location` varchar(255) NOT NULL,
  `cmp_pst_date` datetime NOT NULL DEFAULT current_timestamp(),
  `Complainer` varchar(250) NOT NULL,
  `Complainer_address` text NOT NULL,
  `status` varchar(80) NOT NULL,
  `lst_chng_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_post_cmp`
--

INSERT INTO `tbl_post_cmp` (`post_cmp_id`, `cit_id`, `sec_id`, `sub_ctg_id`, `cmp_desc`, `cmp_location`, `cmp_pst_date`, `Complainer`, `Complainer_address`, `status`, `lst_chng_date`) VALUES
(12, 2, 49, 1, 'Container and dustbin not lifted', 'A/5,makanjipark sos,Rustampura', '2020-04-23 00:00:00', 'dhruv Variya', 'A/5,makanjipark sos,Rustampura', 'completed', '2020-04-16 21:21:16'),
(21, 2, 49, 1, 'Container and dustbin not lifted', 'A/5,makanjipark sos,Rustampura', '2020-04-25 15:31:01', 'dhruv Variya', 'A/5,makanjipark sos,Rustampura', 'completed', '2020-04-25 15:31:01'),
(24, 2, 49, 12, 'damaged road', 'a-71,rustampura road', '2020-04-28 07:42:01', 'dhruv variya', 'katargam                                          ,katargam                                          ', 'completed', '2020-04-28 07:42:01'),
(25, 2, 49, 13, 'damaged footpath', 'a-70 asoka complex', '2020-04-28 08:26:41', 'dhruv variya', 'katargam                                          ,katargam                                          ', 'completed', '2020-04-28 08:26:41'),
(26, 5, 49, 12, 'damaged road', 'a-70, rutampura,surat', '2020-04-28 14:30:20', 'dhruv variya', 'katargam,katargam', 'completed', '2020-04-28 14:30:20'),
(27, 5, 51, 1, 'this is vaery bad lokdown xyz', 'a-5 makanjipark sos', '2020-05-27 19:38:15', 'dhruv variya', 'katargam,katargam', 'pending', '2020-05-27 19:38:15'),
(28, 5, 58, 16, 'pipeline leakage prob...', 'A-5 vishal nagar sos.....', '2020-05-28 12:33:28', 'dhruv variya', 'katargam,katargam', 'pending', '2020-05-28 12:33:28'),
(29, 5, 57, 20, 'street light prob..', 'vishal nagar sos', '2020-05-28 12:34:34', 'dhruv variya', 'katargam,katargam', 'pending', '2020-05-28 12:34:34'),
(30, 6, 65, 21, 'few day to not working street light', 'B-31 Shyam dham society', '2020-09-18 22:34:12', 'Jenish Chanchad', 'Nana Varachha,Nana Varachha', 'completed', '2020-09-18 22:34:12'),
(31, 6, 1, 12, 'Adajan in not road propely.', 'D-401 Aparment opps. Road surat vesu.', '2020-09-16 09:13:09', 'Jenish Chanchad', 'Nana Varachha,Nana Varachha', 'pending', '2020-09-19 09:13:09'),
(32, 6, 39, 15, 'Few last day to not supply proper time and insufficient suplly pressure.', 'E-502 Nanpura area shidhhi vinayak society,Surat. ', '2020-09-19 09:22:43', 'Dhruv Radhod', 'Nana Varachha,Nana Varachha', 'pending', '2020-09-19 09:22:43'),
(33, 5, 27, 18, 'Drainage overflow. please solve as soon as possible', '34, Nirmal Nagar society, Nana varachha, surat', '2020-09-19 13:49:15', 'dhruv variya', 'katargam,katargam', 'pending', '2020-09-19 13:49:15');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sector`
--

CREATE TABLE `tbl_sector` (
  `sec_id` int(11) NOT NULL,
  `sec_name` varchar(50) DEFAULT NULL,
  `sec_pincode` varchar(6) DEFAULT NULL,
  `zone_id` int(11) NOT NULL,
  `is_active` bit(1) NOT NULL DEFAULT b'0',
  `lst_chng_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_sector`
--

INSERT INTO `tbl_sector` (`sec_id`, `sec_name`, `sec_pincode`, `zone_id`, `is_active`, `lst_chng_date`) VALUES
(1, 'Adajan', '395009', 1, b'1', '2020-02-15 20:09:45'),
(5, 'Althan', '395017', 6, b'1', '2020-02-15 20:09:45'),
(6, 'Ambheta', '395005', 1, b'1', '2020-02-15 20:09:45'),
(7, 'Ariana', '395005', 1, b'1', '2020-02-15 20:09:45'),
(8, 'Athawalines', '395007', 1, b'1', '2020-02-15 20:09:45'),
(9, 'Athwalines', '395001', 6, b'1', '2020-02-15 20:09:45'),
(10, 'Barbodhan', '395005', 1, b'1', '2020-02-15 20:09:45'),
(11, 'Bhagal', '395003', 2, b'1', '2020-02-15 20:09:45'),
(12, 'Bhandut', '395005', 1, b'1', '2020-02-15 20:09:45'),
(13, 'Bharthana', '395007', 1, b'1', '2020-02-15 20:09:45'),
(14, 'Bhavanivad', '395003', 2, b'1', '2020-02-15 20:09:45'),
(15, 'Bhesan', '395005', 1, b'1', '2020-02-15 20:09:45'),
(17, 'Bombay Market', '395010', 5, b'1', '2020-02-15 20:09:45'),
(18, 'Dabholi', '395004', 3, b'1', '2020-02-15 20:09:45'),
(19, 'Dihen', '395005', 1, b'1', '2020-02-15 20:09:45'),
(20, 'Fulpada', '395008', 1, b'1', '2020-02-15 20:09:45'),
(21, 'Gavier', '395007', 1, b'1', '2020-02-15 20:09:45'),
(22, 'Godadara', '395012', 4, b'1', '2020-02-15 20:09:45'),
(23, 'Gopipura', '395001', 2, b'1', '2020-02-15 20:09:45'),
(24, 'Gotalawadi', '395004', 3, b'1', '2020-02-15 20:09:45'),
(25, 'Govt. Medical College', '395001', 3, b'1', '2020-02-15 20:09:45'),
(26, 'Hajira', '394270', 1, b'1', '2020-02-15 20:09:45'),
(27, 'Inderpura', '395002', 2, b'1', '2020-02-15 20:09:45'),
(28, 'Jhampa', '395003', 2, b'1', '2020-02-15 20:09:45'),
(29, 'Katargam', '395004', 3, b'1', '2020-02-15 20:09:45'),
(30, 'Khajod', '395007', 1, b'1', '2020-02-15 20:09:45'),
(32, 'Kosmada', '395006', 5, b'1', '2020-02-15 20:09:45'),
(33, 'Lajpore', '394235', 4, b'1', '2020-02-15 20:09:45'),
(34, 'Laskana', '395006', 5, b'1', '2020-02-15 20:09:45'),
(35, 'Limbayat', '395012', 4, b'1', '2020-02-15 20:09:45'),
(36, 'Magdalla', '395007', 1, b'1', '2020-02-15 20:09:45'),
(37, 'Mahidharpura', '395003', 2, b'1', '2020-02-15 20:09:45'),
(38, 'Motived', '395004', 3, b'1', '2020-02-15 20:09:45'),
(39, 'Nanpura', '395001', 2, b'1', '2020-02-15 20:09:45'),
(40, 'Narthan', '395005', 1, b'1', '2020-02-15 20:09:45'),
(41, 'Navyug College', '395009', 1, b'1', '2020-02-15 20:09:45'),
(42, 'Nawabwadi', '395003', 1, b'1', '2020-02-15 20:09:45'),
(43, 'Palanpur', '395009', 1, b'1', '2020-02-15 20:09:45'),
(44, 'Pandesara', '394221', 4, b'1', '2020-02-15 20:09:45'),
(46, 'Pinjrat', '395005', 1, b'1', '2020-02-15 20:09:45'),
(47, 'Ramnagar', '395009', 1, b'1', '2020-02-15 20:09:45'),
(48, 'Rander', '395005', 1, b'1', '2020-02-15 20:09:45'),
(49, 'Rustampura', '395002', 2, b'1', '2020-02-15 20:09:45'),
(50, 'Sachin', '394230', 0, b'1', '2020-02-15 20:09:45'),
(51, 'Sagrampura Putli', '395002', 2, b'1', '2020-02-15 20:09:45'),
(52, 'Sania Hemad', '395006', 5, b'1', '2020-02-15 20:09:45'),
(53, 'Segva Chhama', '395005', 1, b'1', '2020-02-15 20:09:45'),
(54, 'Selut', '395005', 1, b'1', '2020-02-15 20:09:45'),
(55, 'Singanpore', '395004', 3, b'1', '2020-02-15 20:09:45'),
(56, 'Surat City', '395003', 2, b'1', '2020-02-15 20:09:45'),
(57, 'Surat', '395003', 2, b'1', '2020-02-15 20:09:45'),
(58, 'Surat RS', '395003', 2, b'1', '2020-02-15 20:09:45'),
(59, 'Surat Textile Market', '395002', 2, b'1', '2020-02-15 20:09:45'),
(60, 'Svr College', '395007', 1, b'1', '2020-02-15 20:09:45'),
(61, 'Udhna', '394210', 1, b'1', '2020-02-15 20:09:45'),
(62, 'Udhnagam', '394210', 1, b'1', '2020-02-15 20:09:45'),
(63, 'Umra', '395007', 1, b'1', '2020-02-15 20:09:45'),
(64, 'Valak', '395006', 5, b'1', '2020-02-15 20:09:45'),
(65, 'Varachha Road', '395006', 5, b'1', '2020-02-15 20:09:45'),
(67, 'Variavi Bhagal', '395003', 1, b'1', '2020-02-15 20:09:45'),
(68, 'Vasta Devdi Road', '395004', 3, b'1', '2020-02-15 20:09:45'),
(69, 'Vesu', '395007', 1, b'1', '2020-02-15 20:09:45');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_sector_officer`
--

CREATE TABLE `tbl_sector_officer` (
  `sec_o_id` int(11) NOT NULL,
  `sec_fname` varchar(30) NOT NULL,
  `sec_lname` varchar(30) NOT NULL,
  `sec_contact_no` varchar(10) NOT NULL,
  `sec_gender` varchar(1) NOT NULL,
  `sec_address` varchar(100) NOT NULL,
  `sec_pincode` varchar(6) NOT NULL,
  `sec_job_pincode` varchar(6) NOT NULL,
  `sec_is_active` bit(1) NOT NULL,
  `sec_lst_chng_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_sector_officer`
--

INSERT INTO `tbl_sector_officer` (`sec_o_id`, `sec_fname`, `sec_lname`, `sec_contact_no`, `sec_gender`, `sec_address`, `sec_pincode`, `sec_job_pincode`, `sec_is_active`, `sec_lst_chng_date`) VALUES
(15, 'rathod', 'kishan', '7621978056', 'm', 'makanjipark', '395004', '395006', b'1', '2020-04-23 10:56:44'),
(16, 'bhavin', 'gediya', '9726998291', 'm', 'varachha', '395006', '395006', b'1', '2020-04-27 10:39:39'),
(19, 'mitul kumar', 'variya', '7586256842', 'm', 'katargam', '395004', '395006', b'1', '2020-04-28 08:31:38'),
(20, 'bhavin', 'Patel', '7896541236', 'm', '105 Chikuvadi Nana Varachha Surat', '395006', '395007', b'1', '2020-09-19 09:46:04');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_superadmin`
--

CREATE TABLE `tbl_superadmin` (
  `sup_id` int(11) NOT NULL,
  `sup_fname` varchar(30) NOT NULL,
  `sup_lname` varchar(30) NOT NULL,
  `sup_contact_no` varchar(10) NOT NULL,
  `sup_gender` varchar(1) NOT NULL,
  `sup_address` varchar(100) NOT NULL,
  `sup_pincode` varchar(6) NOT NULL,
  `sup_is_active` bit(1) NOT NULL,
  `sup_lst_chng_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_superadmin`
--

INSERT INTO `tbl_superadmin` (`sup_id`, `sup_fname`, `sup_lname`, `sup_contact_no`, `sup_gender`, `sup_address`, `sup_pincode`, `sup_is_active`, `sup_lst_chng_date`) VALUES
(1, 'dhruv', 'Rathod', '7621978056', 'm', 'admin', '', b'1', '2020-01-27 20:54:42'),
(3, 'jenish', 'chachad', '7621978056', 'm', 'secter', '', b'1', '2020-01-27 20:54:42');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_type_master`
--

CREATE TABLE `tbl_type_master` (
  `type_id` int(11) NOT NULL,
  `type_name` varchar(50) NOT NULL,
  `is_active` bit(1) NOT NULL,
  `lst_chng_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_type_master`
--

INSERT INTO `tbl_type_master` (`type_id`, `type_name`, `is_active`, `lst_chng_date`) VALUES
(1, 'Admin', b'1', '2020-01-26 21:00:38'),
(2, 'Sector Offic', b'1', '2020-01-26 21:01:34'),
(3, 'Citizen', b'1', '2020-01-26 21:02:10'),
(4, 'Worker', b'1', '2020-01-26 21:02:24'),
(5, 'Emergence cmp solver', b'1', '2020-10-24 12:06:44');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_pic`
--

CREATE TABLE `tbl_user_pic` (
  `u_p_id` int(11) NOT NULL,
  `u_image` varchar(250) NOT NULL,
  `u_id` int(250) NOT NULL,
  `u_type` int(11) NOT NULL,
  `is_active` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_user_pic`
--

INSERT INTO `tbl_user_pic` (`u_p_id`, `u_image`, `u_id`, `u_type`, `is_active`) VALUES
(7, '7.jpg', 5, 3, 0),
(9, '9.jpg', 1, 1, 0),
(10, '10.jpg', 15, 2, 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_zone`
--

CREATE TABLE `tbl_zone` (
  `z_id` int(11) NOT NULL,
  `z_name` varchar(25) NOT NULL,
  `is_active` bit(1) NOT NULL,
  `lst_chng_date` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_zone`
--

INSERT INTO `tbl_zone` (`z_id`, `z_name`, `is_active`, `lst_chng_date`) VALUES
(1, 'west zone', b'1', '2020-02-15 20:55:26'),
(2, 'central zone', b'1', '2020-02-15 20:55:26'),
(3, 'north zone', b'1', '2020-02-15 20:56:51'),
(4, 'south zone', b'1', '2020-02-15 20:56:51'),
(5, 'east zone', b'1', '2020-02-16 18:05:44'),
(6, 'South West zone', b'1', '2020-04-05 15:00:20');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_apply_leave`
--
ALTER TABLE `tbl_apply_leave`
  ADD PRIMARY KEY (`l_id`);

--
-- Indexes for table `tbl_citizen`
--
ALTER TABLE `tbl_citizen`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `tbl_cmp_asgn_hgr_auth`
--
ALTER TABLE `tbl_cmp_asgn_hgr_auth`
  ADD PRIMARY KEY (`cmp_asgn_hgr_id`);

--
-- Indexes for table `tbl_cmp_asgn_sec`
--
ALTER TABLE `tbl_cmp_asgn_sec`
  ADD PRIMARY KEY (`cmp_asg_sec_id`);

--
-- Indexes for table `tbl_cmp_asgn_sec_wrk`
--
ALTER TABLE `tbl_cmp_asgn_sec_wrk`
  ADD PRIMARY KEY (`cmp_asg_sec_wrk_id`);

--
-- Indexes for table `tbl_cmp_category`
--
ALTER TABLE `tbl_cmp_category`
  ADD PRIMARY KEY (`cmp_id`);

--
-- Indexes for table `tbl_cmp_photo`
--
ALTER TABLE `tbl_cmp_photo`
  ADD PRIMARY KEY (`i_id`);

--
-- Indexes for table `tbl_cmp_sub_category`
--
ALTER TABLE `tbl_cmp_sub_category`
  ADD PRIMARY KEY (`sub_ctg_id`);

--
-- Indexes for table `tbl_cmp_video`
--
ALTER TABLE `tbl_cmp_video`
  ADD PRIMARY KEY (`v_id`);

--
-- Indexes for table `tbl_emergence_cmp_solver`
--
ALTER TABLE `tbl_emergence_cmp_solver`
  ADD PRIMARY KEY (`ecs_id`);

--
-- Indexes for table `tbl_employee`
--
ALTER TABLE `tbl_employee`
  ADD PRIMARY KEY (`w_id`);

--
-- Indexes for table `tbl_feedback`
--
ALTER TABLE `tbl_feedback`
  ADD PRIMARY KEY (`f_id`);

--
-- Indexes for table `tbl_login_master`
--
ALTER TABLE `tbl_login_master`
  ADD PRIMARY KEY (`lgn_id`),
  ADD KEY `tbl_login_master_ibfk_4` (`lgn_details_id`),
  ADD KEY `tbl_login_master_ibfk_1` (`type_id`);

--
-- Indexes for table `tbl_post_cmp`
--
ALTER TABLE `tbl_post_cmp`
  ADD PRIMARY KEY (`post_cmp_id`);

--
-- Indexes for table `tbl_sector`
--
ALTER TABLE `tbl_sector`
  ADD PRIMARY KEY (`sec_id`);

--
-- Indexes for table `tbl_sector_officer`
--
ALTER TABLE `tbl_sector_officer`
  ADD PRIMARY KEY (`sec_o_id`);

--
-- Indexes for table `tbl_superadmin`
--
ALTER TABLE `tbl_superadmin`
  ADD PRIMARY KEY (`sup_id`);

--
-- Indexes for table `tbl_type_master`
--
ALTER TABLE `tbl_type_master`
  ADD PRIMARY KEY (`type_id`);

--
-- Indexes for table `tbl_user_pic`
--
ALTER TABLE `tbl_user_pic`
  ADD PRIMARY KEY (`u_p_id`);

--
-- Indexes for table `tbl_zone`
--
ALTER TABLE `tbl_zone`
  ADD PRIMARY KEY (`z_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_apply_leave`
--
ALTER TABLE `tbl_apply_leave`
  MODIFY `l_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_citizen`
--
ALTER TABLE `tbl_citizen`
  MODIFY `c_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_cmp_asgn_hgr_auth`
--
ALTER TABLE `tbl_cmp_asgn_hgr_auth`
  MODIFY `cmp_asgn_hgr_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_cmp_asgn_sec`
--
ALTER TABLE `tbl_cmp_asgn_sec`
  MODIFY `cmp_asg_sec_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_cmp_asgn_sec_wrk`
--
ALTER TABLE `tbl_cmp_asgn_sec_wrk`
  MODIFY `cmp_asg_sec_wrk_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_cmp_category`
--
ALTER TABLE `tbl_cmp_category`
  MODIFY `cmp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_cmp_photo`
--
ALTER TABLE `tbl_cmp_photo`
  MODIFY `i_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `tbl_cmp_sub_category`
--
ALTER TABLE `tbl_cmp_sub_category`
  MODIFY `sub_ctg_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `tbl_cmp_video`
--
ALTER TABLE `tbl_cmp_video`
  MODIFY `v_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_emergence_cmp_solver`
--
ALTER TABLE `tbl_emergence_cmp_solver`
  MODIFY `ecs_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_employee`
--
ALTER TABLE `tbl_employee`
  MODIFY `w_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_feedback`
--
ALTER TABLE `tbl_feedback`
  MODIFY `f_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_login_master`
--
ALTER TABLE `tbl_login_master`
  MODIFY `lgn_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=76;

--
-- AUTO_INCREMENT for table `tbl_post_cmp`
--
ALTER TABLE `tbl_post_cmp`
  MODIFY `post_cmp_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `tbl_sector`
--
ALTER TABLE `tbl_sector`
  MODIFY `sec_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=78;

--
-- AUTO_INCREMENT for table `tbl_sector_officer`
--
ALTER TABLE `tbl_sector_officer`
  MODIFY `sec_o_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `tbl_superadmin`
--
ALTER TABLE `tbl_superadmin`
  MODIFY `sup_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_type_master`
--
ALTER TABLE `tbl_type_master`
  MODIFY `type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_user_pic`
--
ALTER TABLE `tbl_user_pic`
  MODIFY `u_p_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tbl_zone`
--
ALTER TABLE `tbl_zone`
  MODIFY `z_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_login_master`
--
ALTER TABLE `tbl_login_master`
  ADD CONSTRAINT `tbl_login_master_ibfk_1` FOREIGN KEY (`type_id`) REFERENCES `tbl_type_master` (`type_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
