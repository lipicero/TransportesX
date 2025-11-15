-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-11-2025 a las 00:46:09
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `transportesx`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

CREATE TABLE `novedades` (
  `id` int(11) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` varchar(250) NOT NULL,
  `cuerpo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`, `img_id`) VALUES
(6, 'Renovación de flota 2025', 'Unidades más potentes, eficientes y preparadas para largas distancias.', 'Incorporamos camiones de última generación equipados con motores de alta eficiencia y sistemas avanzados de asistencia al conductor. Este salto tecnológico mejora la confiabilidad del servicio, reduce tiempos de viaje y optimiza el consumo de combustible. La meta es clara: ofrecer un transporte más sólido, competitivo y orientado al futuro.', 'qefc2q000fl0bi27r6fm'),
(7, 'Nuevo servicio de rastreo en tiempo real', 'Ahora podés seguir tu envío desde cualquier dispositivo.', 'Implementamos un sistema de rastreo actualizado que permite conocer la ubicación exacta de cada unidad en movimiento. Este avance mejora la transparencia, optimiza los tiempos de respuesta y brinda mayor seguridad a tus envíos. Nuestro objetivo es que tengas el control total de tu carga durante todo el recorrido.', 'b99vpkrpeadf5vswj9ny'),
(8, 'Promoción “Envíos Express 20% Off”', 'Velocidad garantizada a un precio más accesible.', 'Lanzamos una promoción especial para envíos express con un 20% de descuento durante todo el mes. Está orientada a clientes que necesitan rapidez sin comprometer la calidad del servicio. La propuesta busca impulsar la demanda y ofrecer una ventaja concreta en costos operativos.', 'f9fgxvwzknvvhpxsc3xf');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `usuario`, `password`) VALUES
(3, 'admin@transportesx.com', '21232f297a57a5a743894a0e4a801fc3');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `novedades`
--
ALTER TABLE `novedades`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `novedades`
--
ALTER TABLE `novedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
