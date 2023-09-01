import { StaticImageData } from 'next/image'
import orgsystem from './assets/orgsystem.png'
import engdigital from './assets/engdigital.png'
import gft from './assets/gft.png'
import smn from './assets/smn.png'

interface CompanyImagesProps {
  engdigital: StaticImageData;
  orgsystem: StaticImageData;
  gft: StaticImageData;
  smn: StaticImageData;
}

export const companyImages: CompanyImagesProps = {
  orgsystem,
  engdigital,
  gft,
  smn,
}