import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Image src='/images/image1.jpg' alt="image 1" width="7360" height="4100" prority="true" layout="responsive"/>
      <Image src='/images/image2.jpg' alt="image 2" width="4928" height="3264" layout="responsive"/>
      <Image src='/images/image3.jpg' alt="image 3" width="7360" height="4912" layout="responsive"/>
      <Image src='/images/image4.jpg' alt="image 4" width="5335" height="3557" layout="responsive"/>
      <Image src='/images/image5.jpg' alt="image 6" width="5128" height="3419" layout="responsive"/>
      <Image src='/images/image6.jpg' alt="image 7" width="5112" height="3408" layout="responsive"/>
      <Image src='/images/image7.jpg' alt="image 5" width="4797" height="3026" layout="responsive"/>
      <Image src='/images/image8.jpg' alt="image 8" width="5472" height="3648" layout="responsive"/>
      <Image src='/images/image9.jpg' alt="image 9" width="7932" height="5291" layout="responsive"/>
    </>
  )
}
