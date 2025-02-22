export function createPlatforms(scene) {
    const platforms = scene.physics.add.staticGroup();

  // PLATAFORMAS VERTICALES ROJAS
  const platformDatarojasV = [
    { id: 'platformRedv1', x: 235, y: 55, scaleX: 1, scaleY: 0.15 },
    { id: 'platformRedv2', x: 235, y: 340, scaleX: 1, scaleY: 0.2 },
    { id: 'platformRedv3', x: 480, y: 420, scaleX: 1, scaleY: 0.2 },
    { id: 'platformRedv5', x: 600, y: 220, scaleX: 1, scaleY: 0.2 },
    { id: 'platformRedv5', x: 600, y: 70, scaleX: 1, scaleY: 0.2 },
    
 ];
 platformDatarojasV.forEach(data => {
     let platform = platforms.create(data.x, data.y, 'rojo').setName(data.id);
     platform.setScale(data.scaleX, data.scaleY).refreshBody();
 });

 // PLATAFORMA HORIZONTALES
    const platformData = [
        { id: 'platform1', x: 100, y: 10, scaleX: 10, scaleY: 1 },
        { id: 'platform2', x: 100, y: 520, scaleX: 10, scaleY: 1 },
        { id: 'platform3', x: 0, y: 90, scaleX: 0.5, scaleY: 1 },
        { id: 'platform4', x: 0, y: 171, scaleX: 2.15, scaleY: 1 },
        { id: 'platform5', x: 364, y: 90, scaleX: 0.3, scaleY: 1 },
        //{ id: 'platform5', x: 420, y: 253, scaleX: 0.27, scaleY: 1 },
        { id: 'platform5', x: 285, y: 250, scaleX: 0.2, scaleY: 1 },
        { id: 'platform5', x: 320, y: 390, scaleX: 0.8, scaleY: 1 },
        { id: 'platform5', x: 126, y: 250, scaleX: 0.3, scaleY: 1 },
        { id: 'platform5', x: 50, y: 335, scaleX: 0.33, scaleY: 1 },
        { id: 'platform5', x: 132, y: 440, scaleX: 0.27, scaleY: 1 },
        { id: 'platform5', x: 380, y: 490, scaleX: 0.8, scaleY: 2.4 },
        { id: 'platform1', x: 500, y: 250, scaleX: 0.6, scaleY: 1 },
        { id: 'platform1', x: 665, y: 420, scaleX: 0.3, scaleY: 1 },
        { id: 'platform1', x: 735, y: 335, scaleX: 0.3, scaleY: 1 },
        { id: 'platform1', x: 650, y: 250, scaleX: 0.4, scaleY: 1 },
        { id: 'platform1', x: 745, y: 170, scaleX: 0.9, scaleY: 1 },
        { id: 'platform1', x: 735, y: 114, scaleX: 0.9, scaleY: 2.5 },
    ];   
    platformData.forEach(data => {
        let platform = platforms.create(data.x, data.y, 'platform').setName(data.id);
        platform.setScale(data.scaleX, data.scaleY).refreshBody();
    });
    // PLATAFORMAS HOTIZONTALES ROJAS
    const platformDatarojas = [
       { id: 'platformRed1', x: 450, y: 171, scaleX: 0.1, scaleY: 1 },
       { id: 'platformRed2', x: 345, y: 250, scaleX: 0.2, scaleY: 1 },
       { id: 'platformRed3', x: 50, y: 250, scaleX: 0.12, scaleY: 1 },
       { id: 'platformRed4', x: 130, y: 335, scaleX: 0.12, scaleY: 1 },
       { id: 'platformRed5', x: 52, y: 440, scaleX: 0.15, scaleY: 1 },
       { id: 'platformRed6', x: 590, y: 418.3, scaleX: 0.15, scaleY: 1 },
       { id: 'platformRed7', x: 750, y: 420, scaleX: 0.15, scaleY: 1 },
       { id: 'platformRed8', x: 650, y: 335, scaleX: 0.15, scaleY: 1 },
       { id: 'platformRed8', x: 750, y: 250, scaleX: 0.15, scaleY: 1 },
      
    ];
    platformDatarojas.forEach(data => {
        let platform = platforms.create(data.x, data.y, 'platformROJA').setName(data.id);
        platform.setScale(data.scaleX, data.scaleY).refreshBody();
    });
   
    // plataformas verticales
    const platformDataV = [
        { id: 'platformV1', x: 10,  y: 350, scaleX: 1, scaleY: 10 },
        { id: 'platformV1', x: 790,  y: 350, scaleX: 1, scaleY: 10 },
        { id: 'platformV2', x: 890, y: 205, scaleX: 1, scaleY: 1.8 },
        { id: 'platformV3', x: 150, y: 28, scaleX: 1, scaleY: 0.356 },
        { id: 'platformV4', x: 320, y: 28, scaleX: 1, scaleY: 0.356 },
        { id: 'platformV5', x: 235, y: 195, scaleX: 1, scaleY: 0.6 },
        { id: 'platformV6', x: 481, y: 28, scaleX: 1, scaleY: 1.89 },
        { id: 'platformV6', x: 170, y: 325, scaleX: 1, scaleY: 0.4 },
        { id: 'platformV6', x: 170, y: 375, scaleX: 1, scaleY: 0.4 },
       { id: 'platformV6', x: 435, y: 320, scaleX: 3, scaleY: 0.3 },
        { id: 'platformV6', x: 550, y: 460, scaleX: 1, scaleY: 0.7 },
        { id: 'platformV6', x: 620, y: 334, scaleX: 1, scaleY: 0.5 },
        { id: 'platformV6', x: 550, y: 130, scaleX: 1, scaleY: 0.28 },
     

    ];

    platformDataV.forEach(data => {
        let platform = platforms.create(data.x, data.y, 'platformV').setName(data.id);
        platform.setScale(data.scaleX, data.scaleY).refreshBody();
    });

    return platforms;
}
