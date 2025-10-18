export interface Exercise {
  id: string;
  station: number;
  title: string;
  category: 'mobility' | 'strength' | 'endurance';
  description: string;
  imageUrl: string;
  instructions: string[];
}

export const exercises: Exercise[] = [
  // YELLOW - Mobility/Agility (Station 1)
  {
    id: 'yellow-1-1',
    station: 1,
    title: 'Preparatory Stretching (Upper Body)',
    category: 'mobility',
    description: 'Dynamic stretching to prepare your upper body for exercise',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/3cb9db95-9c27-423c-accf-15289f5da54d-yellow-station-01-preparatory-stretching-uper-body.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T052106Z&X-Amz-Expires=86400&X-Amz-Signature=74584253852b5733aafd73dbbb5711d390f0371ebde3ac5145e37eb70883d704&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Gently reach arms overhead and lean to each side',
      'Perform arm circles in both directions',
      'Repeat 10 times each direction'
    ]
  },
  {
    id: 'yellow-1-2',
    station: 1,
    title: 'Preparatory Stretching (Ankle)',
    category: 'mobility',
    description: 'Ankle mobility preparation for lower body work',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/a207f4dc-b96d-4ebb-9e17-b53051ec58c6-yellow-station-01-preparatory-stretching-ankle.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T052128Z&X-Amz-Expires=86400&X-Amz-Signature=7dc1f809031f0d771cd592f6370ad04e6f54653e3819433da801702b35e1f493&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand on one leg for balance',
      'Rotate ankle in circles',
      'Perform 10 circles each direction per ankle',
      'Switch legs and repeat'
    ]
  },
  {
    id: 'yellow-1-3',
    station: 1,
    title: 'Preparatory Stretching (Calf)',
    category: 'mobility',
    description: 'Calf stretching to prepare for lower body exercises',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/670e774b-705d-497a-b101-d8fd9e3d213e-yellow-station-01-preparatory-stretching-calf.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T052133Z&X-Amz-Expires=86400&X-Amz-Signature=b9de4790356c9e1b2c53561bc205aa335e87c43d9f39e3ca45082acc3a1a0ba1&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand facing a wall or support',
      'Step one leg back',
      'Keep heel on ground and lean forward',
      'Hold for 20-30 seconds, then switch legs'
    ]
  },

  // YELLOW - Mobility/Agility (Station 2)
  {
    id: 'yellow-2-1',
    station: 2,
    title: 'Lift Heels, Toes',
    category: 'mobility',
    description: 'Improve ankle mobility and calf flexibility',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/2017ad81-93fb-4f57-9ec8-5982f58e2cf6-yellow-station-02-lift-heels-toes.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T052027Z&X-Amz-Expires=86400&X-Amz-Signature=fbc64aa3767c6faf203c50bd6ac17ecd5a24a1e3ec58e10ea68e32f05aff3d63&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand with feet hip-width apart',
      'Rise up on toes, hold for 2 seconds',
      'Lower heels and lift toes up',
      'Repeat 15-20 times'
    ]
  },
  {
    id: 'yellow-2-2',
    station: 2,
    title: 'Squat Raise Into Toes',
    category: 'mobility',
    description: 'Combined lower body mobility and ankle work',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/0b576369-d3c1-4712-b892-222224bdfcc0-yellow-station-02-squat-rase-into-toes.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T052019Z&X-Amz-Expires=86400&X-Amz-Signature=05e11159e576666de780573ecc796fd675aead1ecfb3c6b0a72624bd139bebb1&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Lower into a squat position',
      'While in squat, raise up on toes',
      'Repeat 10-12 times'
    ]
  },
  {
    id: 'yellow-2-3',
    station: 2,
    title: 'Jump Cross-Legged',
    category: 'mobility',
    description: 'Dynamic footwork and coordination training',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/1833f0cb-14b6-4a72-b5b2-3d263593a93b-yellow-station-02-jump-cross-legged.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T051351Z&X-Amz-Expires=86400&X-Amz-Signature=dc360ae6aa92cde30d410bbab7707949a63dab210e54822d7769bd96c889e760&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Jump with feet together 10 times',
      'Jump with feet apart 10 times',
      'Jump with feet crossed 10 times',
      'Repeat sequence 2-3 times'
    ]
  },
  {
    id: 'yellow-2-4',
    station: 2,
    title: 'Reciprocal Arm Swings',
    category: 'mobility',
    description: 'Shoulder and arm mobility with dynamic movement',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/a65ed087-905f-41ad-aa08-09e4460f07a0-yellow-station-02-reciprocal-arm-swings.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T051328Z&X-Amz-Expires=86400&X-Amz-Signature=571bef2d8e0722091e147a3fcc381bc9e12c7c2669002833a1ebd2282d6e0663&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Swing arms forward and back in opposite directions',
      'Gradually increase range of motion',
      'Perform 20-30 swings'
    ]
  },
  {
    id: 'yellow-2-5',
    station: 2,
    title: 'Parallel Arm Swings Figure-Eight Motion',
    category: 'mobility',
    description: 'Complex arm coordination and shoulder mobility',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/82f9cfe3-012d-46e3-ac70-81103702dcd8-yellow-station-02-parallel-arm-swings-figure-eight%20motion.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T051320Z&X-Amz-Expires=86400&X-Amz-Signature=2eb60345be34d1f6ac05c07c473bb2521b671d92b18080b98917f0259eb9d744&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Extend arms in front of body',
      'Trace a figure-eight pattern in the air',
      'Perform 10 figure-eights in each direction',
      'Repeat 2-3 times'
    ]
  },
  {
    id: 'yellow-2-6',
    station: 2,
    title: 'Backward Crawl Different Heights',
    category: 'mobility',
    description: 'Full body coordination and mobility at various levels',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/0e5dcd15-cac6-40aa-953d-7423a81c2cac-yellow-station-02-backward-crawl-different-heights.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T051309Z&X-Amz-Expires=86400&X-Amz-Signature=09f4d125a09ed17c5590c7421ef1a8b95e7c5c47b86bc59703327e88db519f34&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Start in standing position',
      'Crawl backward on hands and feet',
      'Perform at high level (hands high)',
      'Perform at low level (hands low)'
    ]
  },

  // YELLOW - Mobility/Agility (Station 3)
  {
    id: 'yellow-3-1',
    station: 3,
    title: 'Balance Trunk',
    category: 'mobility',
    description: 'Balance and coordination with controlled landing',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/eff005ba-37b1-4581-adb8-fc979bef45d9-yellow-station-03-balance-trunk.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T051256Z&X-Amz-Expires=86400&X-Amz-Signature=c20b9ee49257d2a829b9d7acb8272d70491a7398337a884e917564fa5e8438e7&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand on a stable surface or log',
      'Maintain balance for 20-30 seconds',
      'Engage core muscles',
      'Repeat 3-4 times'
    ]
  },

  // YELLOW - Mobility/Agility (Station 4)
  {
    id: 'yellow-4-1',
    station: 4,
    title: 'Hang and Breathe Calmly',
    category: 'mobility',
    description: 'Shoulder mobility and controlled breathing',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/86ab9c9b-3196-43fe-977b-cafbf9f15296-yellow-station-04-hang-and-breathe-calmly.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T051228Z&X-Amz-Expires=86400&X-Amz-Signature=cd21e829b5a2a1a4a08884f2365d8793262953e33260bf4118cecb5a8b608321&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Grip pull-up bar with hands shoulder-width apart',
      'Hang with arms extended',
      'Maintain calm, steady breathing',
      'Hold for 20-30 seconds'
    ]
  },

  // YELLOW - Mobility/Agility (Station 5)
  {
    id: 'yellow-5-1',
    station: 5,
    title: 'Arch and Round Your Back',
    category: 'mobility',
    description: 'Spinal mobility and flexibility',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/6d3b6fab-d019-41de-af08-3213b3ef143e-yellow-station-05-arch-and-round-your-back.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T051148Z&X-Amz-Expires=86400&X-Amz-Signature=605c492bd1b27af044bc5586a170789de1ad84c70ffb2c5da09dd0654da81eac&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Arch your back gently',
      'Then round your back',
      'Repeat 10-15 times'
    ]
  },
  {
    id: 'yellow-5-2',
    station: 5,
    title: 'Intense Torso Rotation',
    category: 'mobility',
    description: 'Core rotation and spinal mobility',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/2aff005d-0fb1-4508-99b6-1b6fdf0dcf06-yellow-station-05-intense-torso-rotation.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T051139Z&X-Amz-Expires=86400&X-Amz-Signature=9b8ab793fcd151077a8ed91e296a998b0e44fb0b317e5c824cbb97910261f4e8&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Place hands behind head',
      'Rotate torso left and right',
      'Perform 20-30 rotations'
    ]
  },
  {
    id: 'yellow-5-3',
    station: 5,
    title: 'Laterally Bend the Upper Body',
    category: 'mobility',
    description: 'Lateral flexibility and side body mobility',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/534951d1-e4d0-4550-a21e-4a0c97aaff8a-yellow-station-05-laterally-bend-the-upper-body.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T051135Z&X-Amz-Expires=86400&X-Amz-Signature=592297743dba27e131a4626ff235abaae551ec1f469251857a904f193c50815d&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Reach one arm overhead',
      'Bend laterally to the opposite side',
      'Hold for 15-20 seconds, then switch'
    ]
  },

  // YELLOW - Mobility/Agility (Station 6)
  {
    id: 'yellow-6-1',
    station: 6,
    title: 'Leg Circles Feet Off Ground',
    category: 'mobility',
    description: 'Hip mobility and core stability',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/94a419d3-afe1-456c-86dd-fac7fb41c489-yellow-station-06-leg-circles-feet-off-the-ground-upper-body-stable.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T051113Z&X-Amz-Expires=86400&X-Amz-Signature=0ce025b962eee5e6d1ea7a070d4f4846f0f92aa8ea24207dd469d12ea87cc17d&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Sit on the ground or bench',
      'Lift feet off ground',
      'Make circles with your feet',
      'Perform 10 circles each direction'
    ]
  },

  // YELLOW - Mobility/Agility (Station 11)
  {
    id: 'yellow-11-1',
    station: 11,
    title: 'Apply Light Pressure to Shoulders',
    category: 'mobility',
    description: 'Shoulder mobility and relaxation',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/9f066766-86be-41b9-8f28-d718511cde37-yellow-station-11-apply-light-pressure-to-shoulders-hold-for-one-second-then-release.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T050819Z&X-Amz-Expires=86400&X-Amz-Signature=f197193dd3c2bda2f0baabd83f2d23f699bacfbb7e6ccf10a63d5664394aeb41&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand upright with good posture',
      'Apply light pressure to shoulders',
      'Hold for one second',
      'Release and repeat 15-20 times'
    ]
  },

  // YELLOW - Mobility/Agility (Station 13)
  {
    id: 'yellow-13-1',
    station: 13,
    title: 'Circle Around Each Post',
    category: 'mobility',
    description: 'Agility and directional control',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/3b2fe20c-91a4-4308-924d-ce09f1d70447-yellow-station-13-circle-around-each-post.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T050744Z&X-Amz-Expires=86400&X-Amz-Signature=e58ed44d93cf05705adef076cbf85ffc211f70ff8fcd3ec7492ec00c30ffa2a5&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand at starting post',
      'Run in circle around each post',
      'Maintain balance and control',
      'Complete 2-3 circuits'
    ]
  },

  // YELLOW - Mobility/Agility (Station 14)
  {
    id: 'yellow-14-1',
    station: 14,
    title: 'Balance Until Horizontal',
    category: 'mobility',
    description: 'Advanced balance and core stability',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/42154626-5938-4003-9eac-ec33c5651f77-yellow-station-14-balance-until-horizontal.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T050727Z&X-Amz-Expires=86400&X-Amz-Signature=cadf780fde8f7800fca1706aa374ad0b46a33af6839e18f652bacd0d7e96279c&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand on one leg',
      'Lean forward until body is horizontal',
      'Hold position for 10-20 seconds',
      'Switch legs and repeat'
    ]
  },
  {
    id: 'yellow-14-2',
    station: 14,
    title: 'Walk Forward and Backward in Balance',
    category: 'mobility',
    description: 'Balance and coordination while moving',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/aa401084-4bb0-40e1-9fc6-97863cf56ca5-yellow-station-14-walk-forward-and-backward-in-balance.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T045801Z&X-Amz-Expires=86400&X-Amz-Signature=6d010c0687cc39fa53d184e5ef4a63f88839160f80e3d5d080bd726594be7fc3&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Walk forward on balance beam',
      'Maintain steady balance',
      'Walk backward on balance beam',
      'Repeat 2-3 times'
    ]
  },

  // YELLOW - Mobility/Agility (Station 15)
  {
    id: 'yellow-15-1',
    station: 15,
    title: 'Calf Stretch',
    category: 'mobility',
    description: 'Calf muscle flexibility and recovery',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/4ab7ad30-6df1-4d7a-8d54-3ee499fa9225-yellow-station-15-calf-stretch.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T045704Z&X-Amz-Expires=86400&X-Amz-Signature=acdcc24c9fb18969254a0f77fbb5a4527a701bf8a1bbc024aee0e7689a0fa287&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand facing a wall',
      'Step one leg back',
      'Keep heel on ground and lean forward',
      'Hold for 20-30 seconds per leg'
    ]
  },
  {
    id: 'yellow-15-2',
    station: 15,
    title: 'Quad Standing Stretch',
    category: 'mobility',
    description: 'Quadriceps flexibility and recovery',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/69ac3dec-06e7-4989-9251-03c7bddce7d8-yellow-station-15-quad-standing-stretch.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T045710Z&X-Amz-Expires=86400&X-Amz-Signature=f97e98bd832be7cf2e31e1911093786b055db6e42c6b8a812549b77fb4b7d0da&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand on one leg',
      'Pull other foot toward buttocks',
      'Keep knees together',
      'Hold for 20-30 seconds per leg'
    ]
  },
  {
    id: 'yellow-15-3',
    station: 15,
    title: 'Aductor Stretch',
    category: 'mobility',
    description: 'Inner thigh flexibility and recovery',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/6db42cb8-bbb5-4ff4-b8cf-b8f6cfcb28eb-yellow-station-15-aductor-stretch.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T045716Z&X-Amz-Expires=86400&X-Amz-Signature=03f50a3a7a1d67b45ce73d707b1772b25f1aad1007a339a7e899eeb1a7150ad6&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand with feet wide apart',
      'Bend one knee and lean to that side',
      'Keep other leg straight',
      'Hold for 20-30 seconds per side'
    ]
  },
  {
    id: 'yellow-15-4',
    station: 15,
    title: 'Quad Knee Stretch',
    category: 'mobility',
    description: 'Quadriceps and knee flexibility',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/c9a3578d-2442-4dc2-b392-de41d65241ba-yellow-station-15-quad-knee-stretch.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T045725Z&X-Amz-Expires=86400&X-Amz-Signature=00cb90c69414d1d9cf4085fce3921b3c28d219e84aa5104fb04ce9acd6fa94b9&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Sit on ground with legs extended',
      'Bend one knee and pull toward chest',
      'Keep back straight',
      'Hold for 20-30 seconds per leg'
    ]
  },
  {
    id: 'yellow-15-5',
    station: 15,
    title: 'Seratus Stretch',
    category: 'mobility',
    description: 'Serratus anterior and side body stretch',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/82bbd2c5-f567-4088-9338-2fdfd80db4b8-yellow-station-15-seratus-stretch.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T045734Z&X-Amz-Expires=86400&X-Amz-Signature=25dce326f4c9b8f9898f44ae672aaf262e044d61e469873cfebf38e609690b76&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Reach both arms overhead',
      'Lean to one side',
      'Hold for 15-20 seconds per side'
    ]
  },
  {
    id: 'yellow-15-6',
    station: 15,
    title: 'Neck Stretch',
    category: 'mobility',
    description: 'Neck and upper back flexibility',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/cc6706c0-a6ff-40c0-9763-6be466744236-yellow-station-15-neck-stretch.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T045753Z&X-Amz-Expires=86400&X-Amz-Signature=62b7d3fc8086f136ead29d8ec281d4a123ca98215c2eed20fbb57bb4e4a115bf&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Sit or stand upright',
      'Gently tilt head to one side',
      'Hold for 15-20 seconds',
      'Repeat on other side'
    ]
  },

  // RED - Strength (Station 3)
  {
    id: 'red-3-1',
    station: 3,
    title: 'Jump Feet Together',
    category: 'strength',
    description: 'Explosive lower body power and coordination',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/b0e81761-a971-4d1c-94f1-a886c91eca49-red-station-03-jump-feet-together.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T051241Z&X-Amz-Expires=86400&X-Amz-Signature=721e83c328ad5b2a9d03e4ab300211049dbdb96ff0683696625a2d48b8ff6249&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand with feet together',
      'Jump as high as possible',
      'Land softly with bent knees',
      'Repeat 10-15 times'
    ]
  },

  // RED - Strength (Station 4)
  {
    id: 'red-4-1',
    station: 4,
    title: 'Hold a Suspended Position with Bent Arms',
    category: 'strength',
    description: 'Upper body and core strength endurance',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/3b2efbcc-e509-45ba-93ab-95af4cc81ee5-red-station-04-hold-a-suspended-position-with-bent-arms.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T051216Z&X-Amz-Expires=86400&X-Amz-Signature=cdf23f8edf9838cba76cfb54a95edee6eca426db6e65d1cda39f64ecb0055fca&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Grip pull-up bar with hands shoulder-width apart',
      'Pull up until chin is above bar',
      'Hold position with bent arms',
      'Hold for 10-20 seconds'
    ]
  },
  {
    id: 'red-4-2',
    station: 4,
    title: 'Pull-ups',
    category: 'strength',
    description: 'Upper body pulling strength and endurance',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/382ba574-d91d-4c92-9773-1932eba2bf11-red-station-04-pull-ups.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T051206Z&X-Amz-Expires=86400&X-Amz-Signature=4ba134e582f63be51daf0e772108dafc3ceee0959a4635247e92d6a34f358f7d&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Grip pull-up bar with hands shoulder-width apart',
      'Pull body up until chin is above bar',
      'Lower body with control',
      'Repeat 5-10 times'
    ]
  },

  // RED - Strength (Station 6)
  {
    id: 'red-6-1',
    station: 6,
    title: 'Slowly Lift Knees to the Left, Center, Right',
    category: 'strength',
    description: 'Core and hip flexor strength',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/b3352d32-f831-474f-8c1a-4f8cbec2affd-red-station-06-slowly-lift-knees-to-the-left-center-right.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T051103Z&X-Amz-Expires=86400&X-Amz-Signature=460e5a5ea483cabdcbb0c94ea866dda0593ff117dea1f6e9755c39f100b27f77&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand upright with good posture',
      'Slowly lift knee to the left',
      'Return to center',
      'Lift knee to the right, repeat 10-15 times'
    ]
  },

  // RED - Strength (Station 7)
  {
    id: 'red-7-1',
    station: 7,
    title: 'Gentle Body Swings While Supporting Yourself on Your Arms',
    category: 'strength',
    description: 'Upper body and core stability',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/647b9e37-7ea0-48b8-a851-c6ab1ece3560-red-station-07-gentle-body-swings-while-supporting-yourself-on-your-arms.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T051054Z&X-Amz-Expires=86400&X-Amz-Signature=0de0511f2feb8986230613159a14c43a5c0221e19273c7465f6a8b6a079963a5&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Support yourself on parallel bars or rings',
      'Gently swing body forward and backward',
      'Maintain arm strength and control',
      'Perform 10-15 swings'
    ]
  },
  {
    id: 'red-7-2',
    station: 7,
    title: 'Arm Pull-ups',
    category: 'strength',
    description: 'Upper body pulling strength',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/f201636d-e371-47a0-81c8-8293c466b07a-red-station-07-arm-pull-ups.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T051043Z&X-Amz-Expires=86400&X-Amz-Signature=117b789048415abae485ee7359a6f4cbae288e4a0f04f587f9de42610061e23f&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Grip pull-up bar with hands shoulder-width apart',
      'Pull arms up to lift body',
      'Lower with control',
      'Repeat 5-10 times'
    ]
  },
  {
    id: 'red-7-3',
    station: 7,
    title: 'Move Forward While Supporting Yourself on Your Arms',
    category: 'strength',
    description: 'Upper body and core strength with movement',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/2af6f774-2582-4412-9b43-bc133e89a43f-red-station-07-move-forward-while-supporting-yourself-on-your-arms.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T051027Z&X-Amz-Expires=86400&X-Amz-Signature=94bab76fdfdb89da26d5e74b6884551c561fab135a58e3079e85793170511528&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Support yourself on parallel bars',
      'Move forward by shifting weight on arms',
      'Maintain body control',
      'Complete 5-10 forward movements'
    ]
  },

  // RED - Strength (Station 9)
  {
    id: 'red-9-1',
    station: 9,
    title: 'Alternately Lift Feet by a Shoe\'s Length',
    category: 'strength',
    description: 'Core and lower body strength',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/6b7ac118-ba0f-41c6-99b8-e8f0e1fcbab0-red-station-09-alternately-lift-feet-by-a-shoes-length-keeping-torso-and-legs-straight.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T051005Z&X-Amz-Expires=86400&X-Amz-Signature=60c2428f04899bf949cd6d4df91383cd99eb36fa47198c3553db6793b1cf58ae&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Lie on back with legs extended',
      'Alternately lift feet by a shoe\'s length',
      'Keep torso and legs straight',
      'Perform 20-30 lifts'
    ]
  },
  {
    id: 'red-9-2',
    station: 9,
    title: 'Lift Torso with Back Extension',
    category: 'strength',
    description: 'Lower back and glute strength',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/9305bbbf-4509-4ad5-8449-b032b112f8cf-red-station-09-lift-torso-with-back-extension-without-changing-hip-or-leg-position.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T051001Z&X-Amz-Expires=86400&X-Amz-Signature=0ade8d88a898d163adcbfce2658409c883e1d2804060421b5751e731a137f32b&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Lie face down on ground',
      'Lift torso using back muscles',
      'Keep hips and legs on ground',
      'Repeat 10-15 times'
    ]
  },
  {
    id: 'red-9-3',
    station: 9,
    title: 'Raise Hips as High as Possible',
    category: 'strength',
    description: 'Glute and core strength',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/4f3427cd-659c-48cf-934b-47941fe8b3de-red-station-09-raise-hips-as-high-as-possible-lower-without-touching-the-ground.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T050945Z&X-Amz-Expires=86400&X-Amz-Signature=b4c301057706e58db751777afd24c1fd2cb3d571fe001dd509fcab195219b7b6&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Lie on back with knees bent',
      'Raise hips as high as possible',
      'Lower without touching ground',
      'Repeat 15-20 times'
    ]
  },

  // RED - Strength (Station 12)
  {
    id: 'red-12-1',
    station: 12,
    title: 'Push-ups',
    category: 'strength',
    description: 'Upper body pushing strength',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/0da21843-4695-42de-8b58-82458787803c-red-station-12-push-ups.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T050806Z&X-Amz-Expires=86400&X-Amz-Signature=99667dc7df7dbdad375be07381a0eee10401db6c57102a2a3fc15e702e6dc9c0&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Start in plank position',
      'Lower body until chest nearly touches ground',
      'Push back up to starting position',
      'Repeat 10-15 times'
    ]
  },
  {
    id: 'red-12-2',
    station: 12,
    title: 'Support Yourself on Your Arms Backward',
    category: 'strength',
    description: 'Upper body and core stability',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/39c814e5-2d54-4406-8b2d-08c3be8d4dda-red-station-12-support-yourself-on-your-arms-backward.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T050758Z&X-Amz-Expires=86400&X-Amz-Signature=9c4c422a31f89aeb85979a9c547f9f7fb4347c6d548131bd50bec1e330682d64&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Sit on ground with hands behind you',
      'Support body on hands and feet',
      'Keep body straight',
      'Hold for 20-30 seconds'
    ]
  },

  // BLUE - Endurance (Station 8)
  {
    id: 'blue-8-1',
    station: 8,
    title: 'Climb Up and Down',
    category: 'endurance',
    description: 'Lower body endurance and power',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/50643620-363b-4669-95ca-7fa8123c3f1b-blue-station-08-climb-up-and-down.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T051020Z&X-Amz-Expires=86400&X-Amz-Signature=a06b9fd296bd4eaf9f5c64db5ab7ed9d1aaf1963a53adbe02e5c4b86bfd560b8&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand at base of climbing structure',
      'Climb up to the top',
      'Climb back down',
      'Repeat 3-5 times'
    ]
  },
  {
    id: 'blue-8-2',
    station: 8,
    title: 'Climb Up Fully Then Descend',
    category: 'endurance',
    description: 'Full body climbing endurance',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/7ba75f22-e8d9-4560-9e68-ba6bd079f77c-blue-station-08-climb-up-fully-then-descend.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T051015Z&X-Amz-Expires=86400&X-Amz-Signature=e90c0441783b201c63ced4ee3d77e9d7a404c77aa934707253133538615cf038&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Climb structure fully to the top',
      'Maintain steady pace',
      'Descend carefully',
      'Complete 2-3 full climbs'
    ]
  },

  // BLUE - Endurance (Station 10)
  {
    id: 'blue-10-1',
    station: 10,
    title: 'Jump Feet Together',
    category: 'endurance',
    description: 'Lower body endurance and power',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/4c8d9407-8e42-4c4a-be36-4032da5866b6-blue-station-10-jump-feet-together.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T050841Z&X-Amz-Expires=86400&X-Amz-Signature=2b7cd012d97c0122dd8a71be472e4c172b8122ba35facba9d4f202c14a343704&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand with feet together',
      'Jump continuously',
      'Land softly with bent knees',
      'Continue for 30-60 seconds'
    ]
  },
  {
    id: 'blue-10-2',
    station: 10,
    title: 'Jump Alternately Left Right',
    category: 'endurance',
    description: 'Lateral jumping endurance and coordination',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/d32227da-0260-41ea-9239-b01399f4f5c5-blue-station-10-jump-alternately-left-right.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T050827Z&X-Amz-Expires=86400&X-Amz-Signature=46110324fc01a348e92a4b576ccad731448b4ca5fa47ebbc1b0723f398414dbd&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Jump side to side alternately',
      'Maintain steady rhythm',
      'Land softly on each side',
      'Continue for 30-60 seconds'
    ]
  },

  // BLUE - Endurance (Station 11)
  {
    id: 'blue-11-1',
    station: 11,
    title: 'Support Jumps',
    category: 'endurance',
    description: 'Upper body and core endurance with jumping',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/20e742bd-1aa5-44b5-a649-1c4170c6232e-blue-station-11-support-jumps.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T050813Z&X-Amz-Expires=86400&X-Amz-Signature=b7df605adac74d1126a11dd970ece43498f66b2d5ca9536ffaeed7314a9e6bd2&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Support yourself on parallel bars',
      'Jump while maintaining arm support',
      'Land softly',
      'Repeat 10-15 times'
    ]
  },

  // BLUE - Endurance (Station 13)
  {
    id: 'blue-13-1',
    station: 13,
    title: 'Hurdle Jumps',
    category: 'endurance',
    description: 'Explosive jumping power and endurance',
    imageUrl: 'https://lindy.nyc3.digitaloceanspaces.com/user-content/prod/owners/68d0514b2b025f51e81b7608/attachments/2312c867-2ead-43bb-a558-4d55b3091637-blue-station-13-hurdle-jumps.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=DO00QNZAZRRRMG9PUNE4%2F20251016%2Fnyc3%2Fs3%2Faws4_request&X-Amz-Date=20251016T050750Z&X-Amz-Expires=86400&X-Amz-Signature=37ceb440325c8f64dc6919b6c152ab85f7e992dcb25bd41c40426f41fa1f32f4&X-Amz-SignedHeaders=host&x-id=GetObject',
    instructions: [
      'Stand before hurdles',
      'Jump over each hurdle',
      'Maintain speed and control',
      'Complete course 2-3 times'
    ]
  }
];

export const getExercisesByCategory = (category: 'mobility' | 'strength' | 'endurance') => {
  return exercises.filter(ex => ex.category === category);
};

export const getExercisesByStation = (station: number) => {
  return exercises.filter(ex => ex.station === station);
};

export const exercisesData = exercises;
