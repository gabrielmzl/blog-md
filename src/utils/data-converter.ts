export const dataConverter = (dateISO: string): string => {
  const publicationDate = new Date(dateISO);
  const now = new Date();

  const timeDifferenceInMilliseconds = now.getTime() - publicationDate.getTime();

  const timeDifferenceInYears = Math.floor(timeDifferenceInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
  const timeDifferenceInMonths = Math.floor(timeDifferenceInMilliseconds / (30.44 * 24 * 60 * 60 * 1000));
  const timeDifferenceInDays = Math.floor(timeDifferenceInMilliseconds / (24 * 60 * 60 * 1000));
  const timeDifferenceInHours = Math.floor(timeDifferenceInMilliseconds / (60 * 60 * 1000));

  if (timeDifferenceInYears > 0) {
    return `Publicado há ${timeDifferenceInYears} ${timeDifferenceInYears === 1 ? 'ano' : 'anos'}`;
  } else if (timeDifferenceInMonths > 0) {
    return `Publicado há ${timeDifferenceInMonths} ${timeDifferenceInMonths === 1 ? 'mes' : 'meses'}`;
  } else if (timeDifferenceInDays > 0) {
    return `Publicado há ${timeDifferenceInDays} ${timeDifferenceInDays === 1 ? 'dia' : 'dias'}`;
  } else {
    return `Publicado há ${timeDifferenceInHours} ${timeDifferenceInHours === 1 ? 'hora' : 'horas'}`;
  }
};