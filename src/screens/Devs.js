import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import api from "../sevices/api";
import logo from "../assets/logo.svg";

import like from "../assets/like.svg";
import dislike from "../assets/dislike.svg";

import "./Devs.css";

function Devs({ match }) {
  const [users, setUsers] = useState([
    {
      _id: 123123,
      name: "carlos",
      bio: "eae meu amigo",
      avatar:
        "https://images.unsplash.com/photo-1565439361543-75e9868203c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    },
    {
      _id: 123123,
      name: "carlos",
      bio: "eae meu amigo",
      avatar:
        "https://images.unsplash.com/photo-1565439361543-75e9868203c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    },
    {
      _id: 123123,
      name: "carlos",
      bio: "eae meu amigo",
      avatar:
        "https://images.unsplash.com/photo-1565439361543-75e9868203c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    },
    {
      _id: 123123,
      name: "carlos",
      bio: "eae meu amigo",
      avatar:
        "https://images.unsplash.com/photo-1565439361543-75e9868203c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    },
    {
      _id: 123123,
      name: "carlos",
      bio: "eae meu amigo",
      avatar:
        "https://images.unsplash.com/photo-1565439361543-75e9868203c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    },
    {
      _id: 123123,
      name: "carlos",
      bio: "eae meu amigo",
      avatar:
        "https://images.unsplash.com/photo-1565432680364-1316c4297904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    },
    {
      _id: 123123,
      name: "carlos",
      bio: "eae meu amigo",
      avatar:
        "https://images.unsplash.com/photo-1565439361543-75e9868203c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    },
    {
      _id: 123123,
      name: "carlos",
      bio: "eae meu amigo",
      avatar:
        "https://images.unsplash.com/photo-1565439361543-75e9868203c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    }
  ]);

  // 1- Empty array useEffects work like initState
  // 2- Array with varibles, the component on change of those variables
  // 3- Dont use async function on the first anonymous
  useEffect(() => {
    (async function loadUsers() {
      const response = await api.get("/devs", {
        headers: {
          user: match.params._id
        }
      });

      setUsers(response.data);
    })();
  }, [match.params._id, match.params.id]);

  async function handleLike(id) {
    // await api.post(`/devs/${id}/likes`, null, {
    //   headers: {
    //     user: match.params.id
    //   }
    // });

    setUsers(users.filter(user => user._id !== id));
  }

  async function handleDislike(id) {
    // await api.post(`/devs/${id}/dislikes`, null, {
    //   headers: {
    //     user: match.params.id
    //   }
    // });

    setUsers(users.filter(user => user._id !== id));
  }

  return (
    <div className='main-container'>
      <Link>
        <img src={logo} alt='Tindev' />
      </Link>

      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <img src={user.avatar} alt={user.name} />
              <footer id='infos'>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </footer>
              <div id='icons'>
                <button type='button' onClick={() => handleDislike(user._id)}>
                  <img src={dislike} alt='Dislike' />
                </button>
                <button type='button' onClick={() => handleLike(user._id)}>
                  <img src={like} alt='Like' />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className='end'>Acabou</div>
      )}
    </div>
  );
}

export default Devs;
